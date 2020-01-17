package coupon_system.exceptions.companyExceptions;

import coupon_system.exceptions.CouponSystemException;

public class CompanyNameDuplicateException extends CouponSystemException {
    private static final long serialVersionUID = 1L;

    public CompanyNameDuplicateException() {
    }

    public CompanyNameDuplicateException(String message) {
        super(message);
    }

    public CompanyNameDuplicateException(Throwable cause) {
        super(cause);
    }

    public CompanyNameDuplicateException(String message, Throwable cause) {
        super(message, cause);
    }

    public CompanyNameDuplicateException(String message, Throwable cause, boolean enableSuppression,
                                         boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
