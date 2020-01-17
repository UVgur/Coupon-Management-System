package coupon_system.utilities;

import coupon_system.entities.Company;
import coupon_system.entities.Coupon;
import coupon_system.entities.Customer;
import coupon_system.exceptions.companyExceptions.CompanyDoesntOwnCoupon;
import coupon_system.exceptions.companyExceptions.CompanyEmailDuplicateException;
import coupon_system.exceptions.companyExceptions.CompanyNameDuplicateException;
import coupon_system.exceptions.companyExceptions.CompanyNotExistsException;
import coupon_system.exceptions.couponExceptions.CouponNotExistsException;
import coupon_system.exceptions.couponExceptions.CouponTitleDuplicateException;
import coupon_system.exceptions.customerExceptions.CustomerAlreadyHasCouponException;
import coupon_system.exceptions.customerExceptions.CustomerEmailDuplicateException;
import coupon_system.exceptions.customerExceptions.CustomerNotExistsException;
import coupon_system.repositories.CompanyRepository;
import coupon_system.repositories.CouponRepository;
import coupon_system.repositories.CustomerRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface Validations {

    default void isCompanyExists(long companyId, CompanyRepository companyRepository) throws CompanyNotExistsException {
        companyRepository.findById(companyId)
                .orElseThrow(() -> new CompanyNotExistsException("This company doesn't exist."));
    }

    default void isCouponExists(long couponId, CouponRepository couponRepository) throws CouponNotExistsException {
        couponRepository.findById(couponId)
                .orElseThrow(() -> new CouponNotExistsException("This coupon doesn't exist."));
    }

    default void isCustomerExists(long customerId, CustomerRepository customerRepository) throws CustomerNotExistsException {
        customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerNotExistsException("This customer doesn't exist."));
    }

    default void isCompanyNameDuplicate(String companyName, CompanyRepository companyRepository) throws CompanyNameDuplicateException {
        Optional<Company> isCompanyNameDuplicate = companyRepository.findByName(companyName);
        if (isCompanyNameDuplicate.isPresent()) {
            throw new CompanyNameDuplicateException("Company name: " + companyName
                    + " already exists.");
        }
    }

    default void isCompanyEmailDuplicate(String companyEmail, CompanyRepository companyRepository) throws CompanyEmailDuplicateException {
        Optional<Company> isCompanyEmailDuplicate = companyRepository.findByEmail(companyEmail);
        if (isCompanyEmailDuplicate.isPresent()) {
            throw new CompanyEmailDuplicateException("Company email: " + companyEmail
                    + " already exists.");
        }
    }

    default void isCustomerEmailDuplicate(String customerEmail, CustomerRepository customerRepository) throws CustomerEmailDuplicateException {
        Optional<Customer> isCustomerEmailDuplicate = customerRepository.findByEmail(customerEmail);
        if (isCustomerEmailDuplicate.isPresent()) {
            throw new CustomerEmailDuplicateException("Customer email: " + customerEmail
                    + " already exists.");
        }
    }

    default void isCouponTitleDuplicate(String couponTitle, CouponRepository couponRepository) throws CouponTitleDuplicateException {
        Optional<Coupon> isCouponTitleDuplicate = couponRepository.findByTitle(couponTitle);
        if (isCouponTitleDuplicate.isPresent()) {
            throw new CouponTitleDuplicateException("Coupon title: " + couponTitle
                    + " already exists.");
        }
    }

    default void isCompanyOwnsCoupon(long companyId, long couponId, CouponRepository couponRepository) throws CompanyDoesntOwnCoupon {
        couponRepository.findCompanyCoupon(companyId, couponId)
                .orElseThrow(() -> new CompanyDoesntOwnCoupon("You don't own this coupon."));
    }

    default void isCustomerHasCoupon(long customerId, long couponId, CouponRepository couponRepository) throws CustomerAlreadyHasCouponException {
        Optional<Coupon> isCustomerHasCoupon = couponRepository.findCustomerCoupon(customerId, couponId);
        if (isCustomerHasCoupon.isPresent()) {
            throw new CustomerAlreadyHasCouponException("You already have this coupon.");
        }
    }
}
