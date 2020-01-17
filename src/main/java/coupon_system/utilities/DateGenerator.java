package coupon_system.utilities;

import java.util.Calendar;
import java.util.Date;

public class DateGenerator {
    public static Date getDateAfterMonths(int months) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH, months);
        return cal.getTime();
    }
}
