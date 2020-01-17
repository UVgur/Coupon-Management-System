package coupon_system.exceptions.customerExceptions;

import coupon_system.exceptions.CouponSystemException;

public class CustomerAlreadyHasCouponException extends CouponSystemException {
    private static final long serialVersionUID = 1L;

    public CustomerAlreadyHasCouponException() {
    }

    public CustomerAlreadyHasCouponException(String message) {
        super(message);
    }

    public CustomerAlreadyHasCouponException(Throwable cause) {
        super(cause);
    }

    public CustomerAlreadyHasCouponException(String message, Throwable cause) {
        super(message, cause);
    }

    public CustomerAlreadyHasCouponException(String message, Throwable cause, boolean enableSuppression,
                                             boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
