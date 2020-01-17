package coupon_system.services;

import coupon_system.entities.Company;
import coupon_system.entities.Coupon;
import coupon_system.entities.Customer;
import coupon_system.entities.Income;
import coupon_system.enums.ClientType;
import coupon_system.enums.IncomeType;
import coupon_system.exceptions.CouponSystemException;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.exceptions.companyExceptions.CompanyEmailDuplicateException;
import coupon_system.exceptions.companyExceptions.CompanyNameDuplicateException;
import coupon_system.exceptions.companyExceptions.CompanyNotExistsException;
import coupon_system.exceptions.couponExceptions.CouponExpiredException;
import coupon_system.exceptions.couponExceptions.CouponNotExistsException;
import coupon_system.exceptions.couponExceptions.CouponTitleDuplicateException;
import coupon_system.exceptions.customerExceptions.CustomerEmailDuplicateException;
import coupon_system.exceptions.customerExceptions.CustomerNotExistsException;
import coupon_system.repositories.*;
import coupon_system.utilities.DateGenerator;
import coupon_system.utilities.Validations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;

@Service
public class AdminService implements Validations {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final CouponRepository couponRepository;
    private final CustomerRepository customerRepository;
    private final IncomeRepository incomeRepository;
    private final TokenRepository tokenRepository;

    @Autowired
    public AdminService(UserRepository userRepository,
                        CompanyRepository companyRepository,
                        CouponRepository couponRepository,
                        CustomerRepository customerRepository,
                        IncomeRepository incomeRepository,
                        TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.couponRepository = couponRepository;
        this.customerRepository = customerRepository;
        this.incomeRepository = incomeRepository;
        this.tokenRepository = tokenRepository;
    }

    public long login(String username,String password) throws LoginFailedException {
        return userRepository.login(username, password)
                .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again.")).getId();
    }

    /**
     * COMPANY methods
     */
    public void createCompany(Company company) throws CompanyNameDuplicateException, CompanyEmailDuplicateException {
        this.isCompanyNameDuplicate(company.getName(), companyRepository);
        this.isCompanyEmailDuplicate(company.getEmail(), companyRepository);
        companyRepository.save(company);
    }

    public Company getCompanyById(long companyId) throws CompanyNotExistsException {
        return companyRepository.findById(companyId)
                .orElseThrow(() -> new CompanyNotExistsException("This company doesn't exist."));
    }

    public Collection<Company> getAllCompanies() throws CompanyNotExistsException {
        return companyRepository.findAllCompanies()
                .orElseThrow(() -> new CompanyNotExistsException("There are no companies."));
    }

    public void updateCompany(Company company) throws CompanyNameDuplicateException, CompanyNotExistsException, CompanyEmailDuplicateException {
        this.isCompanyExists(company.getId(), companyRepository);
        this.isCompanyNameDuplicate(company.getName(), companyRepository);
        this.isCompanyEmailDuplicate(company.getEmail(), companyRepository);
        companyRepository.save(company);
    }

    public void deleteCompany(long companyId) {
        companyRepository.deleteById(companyId);
        tokenRepository.deleteAllByClientTypeAndUserId(ClientType.COMPANY, companyId);
    }

    /**
     * COUPON methods
     */
    public void createCoupon(long companyId, Coupon coupon) throws CompanyNotExistsException, CouponTitleDuplicateException {
        this.isCouponTitleDuplicate(coupon.getTitle(), couponRepository);
        coupon.setCompany(companyRepository.findById(companyId)
                .orElseThrow(() -> new CompanyNotExistsException("This company doesn't exist.")));
        couponRepository.save(coupon);

        incomeRepository.save(new Income(
                new Date(System.currentTimeMillis()),
                DateGenerator.getDateAfterMonths(6),
                IncomeType.ADMIN_CREATED_COUPON));
    }

    public Coupon getCouponById(long couponId) throws CouponSystemException {
        return couponRepository.findById(couponId)
                .orElseThrow(() -> new CouponNotExistsException("This coupon doesn't exist."));
    }

    public Collection<Coupon> getAllCoupons() throws CouponNotExistsException {
        return couponRepository.findAllCoupons()
                .orElseThrow(() -> new CouponNotExistsException("There are no coupons."));
    }

    public void updateCoupon(long companyId, Coupon coupon) throws CouponSystemException {

        this.isCouponExists(coupon.getId(), couponRepository);
        this.isCouponTitleDuplicate(coupon.getTitle(), couponRepository);
        coupon.setCompany(companyRepository.findById(companyId)
                .orElseThrow(() -> new CompanyNotExistsException("This company doesn't exist.")));

        if (coupon.getEndDate().after(new Date(System.currentTimeMillis()))) {

            if (coupon.getAmount() > 0) {

                if (coupon.getPrice() > 0) {

                    couponRepository.save(coupon);

                    incomeRepository.save(new Income(
                            new Date(System.currentTimeMillis()),
                            DateGenerator.getDateAfterMonths(6),
                            IncomeType.ADMIN_UPDATED_COUPON));
                } else {
                    throw new CouponExpiredException("Not allowed to update price to less than 1.");
                }
            } else {
                throw new CouponExpiredException("Not allowed to update amount to less than 1.");
            }
        } else {
            throw new CouponExpiredException("Not allowed to update the coupon to expired date.");
        }
    }

    public void deleteCoupon(long couponId) {
        couponRepository.deleteById(couponId);

        incomeRepository.save(new Income(
                new Date(System.currentTimeMillis()),
                DateGenerator.getDateAfterMonths(6),
                IncomeType.ADMIN_DELETED_COUPON));
    }

    /**
     * CUSTOMER methods
     */
    public void createCustomer(Customer customer) throws CustomerEmailDuplicateException {
        this.isCustomerEmailDuplicate(customer.getEmail(), customerRepository);
        customerRepository.save(customer);
    }

    public Customer getCustomerById(long customerId) throws CustomerNotExistsException {
        return customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerNotExistsException("This customer doesn't exist."));
    }

    public Collection<Customer> getAllCustomers() throws CustomerNotExistsException {
        return customerRepository.findAllCustomers()
                .orElseThrow(() -> new CustomerNotExistsException("There are no customers."));
    }

    public void updateCustomer(Customer customer) throws CustomerNotExistsException, CustomerEmailDuplicateException {
        this.isCustomerExists(customer.getId(), customerRepository);
        this.isCustomerEmailDuplicate(customer.getEmail(), customerRepository);
        customerRepository.save(customer);
    }

    public void deleteCustomer(long customerId) {
        customerRepository.deleteById(customerId);
        tokenRepository.deleteAllByClientTypeAndUserId(ClientType.CUSTOMER, customerId);
    }

    /**
     * INCOME methods
     */

    public Collection<Income> getAllIncomes() throws CouponSystemException {
        return incomeRepository.findAllIncomes()
                .orElseThrow(() -> new CouponSystemException("There are no incomes."));
    }

    public Collection<Income> getCompanyIncomes(long companyId) throws CouponSystemException {
        return incomeRepository.findCompanyIncomes(companyId)
                .orElseThrow(() -> new CouponSystemException("There are no incomes of the companies."));
    }

    public Collection<Income> getCustomerIncomes(long customerId) throws CouponSystemException {
        return incomeRepository.findCustomerIncomes(customerId)
                .orElseThrow(() -> new CouponSystemException("There are no incomes of the customers."));
    }

}
