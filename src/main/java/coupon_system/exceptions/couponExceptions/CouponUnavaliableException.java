package coupon_system.exceptions.couponExceptions;

import coupon_system.exceptions.CouponSystemException;

public class CouponUnavaliableException extends CouponSystemException {
    private static final long serialVersionUID = 1L;

    public CouponUnavaliableException() {
    }

    public CouponUnavaliableException(String message) {
        super(message);
    }

    public CouponUnavaliableException(Throwable cause) {
        super(cause);
    }

    public CouponUnavaliableException(String message, Throwable cause) {
        super(message, cause);
    }

    public CouponUnavaliableException(String message, Throwable cause, boolean enableSuppression,
                                      boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
