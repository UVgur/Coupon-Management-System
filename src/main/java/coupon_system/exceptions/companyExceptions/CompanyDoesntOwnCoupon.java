package coupon_system.exceptions.companyExceptions;

import coupon_system.exceptions.CouponSystemException;

public class CompanyDoesntOwnCoupon extends CouponSystemException {
    private static final long serialVersionUID = 1L;

    public CompanyDoesntOwnCoupon() {
    }

    public CompanyDoesntOwnCoupon(String message) {
        super(message);
    }

    public CompanyDoesntOwnCoupon(Throwable cause) {
        super(cause);
    }

    public CompanyDoesntOwnCoupon(String message, Throwable cause) {
        super(message, cause);
    }

    public CompanyDoesntOwnCoupon(String message, Throwable cause, boolean enableSuppression,
                                  boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
