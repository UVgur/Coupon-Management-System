package coupon_system.services;

import coupon_system.entities.Company;
import coupon_system.entities.Coupon;
import coupon_system.entities.Income;
import coupon_system.enums.CouponType;
import coupon_system.enums.IncomeType;
import coupon_system.exceptions.CouponSystemException;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.exceptions.companyExceptions.CompanyDoesntOwnCoupon;
import coupon_system.exceptions.couponExceptions.CouponExpiredException;
import coupon_system.exceptions.couponExceptions.CouponTitleDuplicateException;
import coupon_system.exceptions.couponExceptions.CouponUnavaliableException;
import coupon_system.repositories.CompanyRepository;
import coupon_system.repositories.CouponRepository;
import coupon_system.repositories.IncomeRepository;
import coupon_system.utilities.DateGenerator;
import coupon_system.utilities.Validations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;

@Service
public class CompanyService implements Validations {

    private final CompanyRepository companyRepository;
    private final CouponRepository couponRepository;
    private final IncomeRepository incomeRepository;

    @Autowired
    public CompanyService(CompanyRepository companyRepository,
                          CouponRepository couponRepository,
                          IncomeRepository incomeRepository) {
        this.companyRepository = companyRepository;
        this.couponRepository = couponRepository;
        this.incomeRepository = incomeRepository;
    }

    public long login(String username,
                      String password) throws LoginFailedException {
        return companyRepository.findByNameAndPassword(username, password)
                .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again.")).getId();
    }

    public void createCoupon(Company company, Coupon coupon) throws CouponTitleDuplicateException {
        this.isCouponTitleDuplicate(coupon.getTitle(), couponRepository);
        coupon.setCompany(company);
        couponRepository.save(coupon);

        incomeRepository.save(new Income(company,
                new Date(System.currentTimeMillis()),
                DateGenerator.getDateAfterMonths(6),
                IncomeType.COMPANY_CREATED_COUPON,100.0));
    }

    public Coupon getCompanyCoupon(Company company, long couponId) throws CompanyDoesntOwnCoupon {
        return couponRepository.findCompanyCoupon(company.getId(), couponId)
                .orElseThrow(() -> new CompanyDoesntOwnCoupon("You don't own this coupon."));
    }

    public Collection<Coupon> getAllCompanyCoupons(Company company) throws CouponSystemException {
        return couponRepository.findAllCompanyCoupons(company.getId())
                .orElseThrow(() -> new CompanyDoesntOwnCoupon("You have no coupons."));
    }

    public Collection<Coupon> getAllCompanyCouponsByType(Company company, CouponType couponType) throws CompanyDoesntOwnCoupon {
        return couponRepository.findAllCompanyCouponsByType(company.getId(), couponType)
                .orElseThrow(() -> new CompanyDoesntOwnCoupon("You have no coupons by type: " + couponType + "."));
    }

    public Collection<Coupon> getAllCompanyCouponsByPrice(Company company, double price) throws CompanyDoesntOwnCoupon {
        return couponRepository.findAllCompanyCouponsByPrice(company.getId(), price)
                .orElseThrow(() -> new CompanyDoesntOwnCoupon("You have no coupons by price: " + price + "."));
    }

    public void updateCoupon(Company company, Coupon coupon) throws CouponUnavaliableException, CompanyDoesntOwnCoupon, CouponExpiredException, CouponTitleDuplicateException {

        this.isCompanyOwnsCoupon(company.getId(), coupon.getId(), couponRepository);
        this.isCouponTitleDuplicate(coupon.getTitle(), couponRepository);

        // Checking if updating end date is not expired
        if (coupon.getEndDate().after(new Date(System.currentTimeMillis()))) {

            if (coupon.getAmount() > 0) {

                if (coupon.getPrice() > 0) {

                    Coupon updCoupon = couponRepository.findById(coupon.getId()).get();
                    updCoupon.setEndDate(coupon.getEndDate());
                    updCoupon.setPrice(coupon.getPrice());
                    updCoupon.setAmount(coupon.getAmount());

                    couponRepository.save(updCoupon);

                    incomeRepository.save(new Income(company,
                            new Date(System.currentTimeMillis()),
                            DateGenerator.getDateAfterMonths(6),
                            IncomeType.COMPANY_UPDATED_COUPON,10.0)
                    		);
                } else {
                    throw new CouponUnavaliableException("Not allowed to update price to less than 1.");
                }
            } else {
                throw new CouponUnavaliableException("Not allowed to update amount to less than 1.");
            }
        } else {
            throw new CouponExpiredException("Not allowed to update the coupon to expired date.");
        }
    }

    public void deleteCoupon(Company company, long couponId) throws CompanyDoesntOwnCoupon {
        this.isCompanyOwnsCoupon(company.getId(), couponId, couponRepository);
        couponRepository.deleteById(couponId);

        Income income = new Income(company,
                new Date(System.currentTimeMillis()),
                DateGenerator.getDateAfterMonths(6),
                IncomeType.COMPANY_DELETED_COUPON,
                10.0);
        
        incomeRepository.save(income);
    }

    //INCOME//

    public Collection<Income> getCompanyIncomes(Company company) throws CouponSystemException {
        return incomeRepository.findCompanyIncomes(company.getId())
                .orElseThrow(() -> new CouponSystemException("There are no incomes of the companies."));
    }
}

