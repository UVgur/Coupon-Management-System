package coupon_system.services;

import coupon_system.entities.Coupon;
import coupon_system.entities.Customer;
import coupon_system.entities.Income;
import coupon_system.enums.CouponType;
import coupon_system.enums.IncomeType;
import coupon_system.exceptions.CouponSystemException;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.exceptions.couponExceptions.CouponExpiredException;
import coupon_system.exceptions.couponExceptions.CouponNotExistsException;
import coupon_system.exceptions.couponExceptions.CouponUnavaliableException;
import coupon_system.exceptions.customerExceptions.CustomerDoesntOwnCoupon;
import coupon_system.repositories.CouponRepository;
import coupon_system.repositories.CustomerRepository;
import coupon_system.repositories.IncomeRepository;
import coupon_system.utilities.DateGenerator;
import coupon_system.utilities.Validations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;

@Service
public class CustomerService implements Validations {

    private final CustomerRepository customerRepository;
    private final CouponRepository couponRepository;
    private final IncomeRepository incomeRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository,
                           CouponRepository couponRepository,
                           IncomeRepository incomeRepository) {
        this.customerRepository = customerRepository;
        this.couponRepository = couponRepository;
        this.incomeRepository = incomeRepository;
    }

    public long login(String username,
                      String password) throws LoginFailedException {
        return customerRepository.findByNameAndPassword(username, password)
                .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again.")).getId();
    }

    public void purchaseCoupon(Customer customer, long couponId) throws CouponSystemException {

        // Checking if customer already has a coupon
        this.isCustomerHasCoupon(customer.getId(), couponId, couponRepository);

        Coupon coupon = couponRepository.findById(couponId)
                .orElseThrow(() -> new CouponNotExistsException("This coupon doesn't exist."));

        // Checking if coupon end date isn't expired
        if (coupon.getEndDate().after(new Date(System.currentTimeMillis()))) {

            // Checking amount of the coupon
            if (coupon.getAmount() > 0) {

                coupon.setAmount(coupon.getAmount() - 1);
                couponRepository.save(coupon);

                customer.purchaseCoupon(coupon);
                customerRepository.save(customer);

                Income income = new Income(customer,coupon.getPrice(),
                        new Date(System.currentTimeMillis()),
                        DateGenerator.getDateAfterMonths(6),
                        IncomeType.CUSTOMER_PURCHASED_COUPON
                        );
                incomeRepository.save(income);
            } else {
                throw new CouponUnavaliableException("This coupon is not available");
            }
        } else {
            throw new CouponExpiredException("This coupon is expired.");
        }
    }

    public Collection<Coupon> getPurchasedCoupons(Customer customer) throws CustomerDoesntOwnCoupon {
        return couponRepository.findAllCustomerCoupons(customer.getId())
                .orElseThrow(() -> new CustomerDoesntOwnCoupon("You have no coupons."));
    }

    public Collection<Coupon> getPurchasedCouponsByType(Customer customer, CouponType couponType) throws CustomerDoesntOwnCoupon {
        return couponRepository.findAllCustomerCouponsByType(customer.getId(), couponType)
                .orElseThrow(() -> new CustomerDoesntOwnCoupon("You have no coupons by type: " + couponType + "."));
    }

    public Collection<Coupon> getPurchasedCouponsByPrice(Customer customer, double price) throws CustomerDoesntOwnCoupon {
        return couponRepository.findAllCustomerCouponsByPrice(customer.getId(), price)
                .orElseThrow(() -> new CustomerDoesntOwnCoupon("You have no coupons by type: " + price + "."));
    }

    public Collection<Coupon> getAllAvailableCoupons() throws CouponUnavaliableException {
        return couponRepository.findAllAvailableCoupons()
                .orElseThrow(() -> new CouponUnavaliableException("There are no available coupons."));
    }


    //INCOME//

    public Collection<Income> getCustomerIncomes(long customerId) throws CouponSystemException {
        return incomeRepository.findCustomerIncomes(customerId)
                .orElseThrow(() -> new CouponSystemException("There are no incomes of the customers."));
    }
}
