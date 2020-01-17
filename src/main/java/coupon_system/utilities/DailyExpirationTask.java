package coupon_system.utilities;

import coupon_system.repositories.CouponRepository;
import coupon_system.repositories.IncomeRepository;
import coupon_system.repositories.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class DailyExpirationTask extends Thread {

    private final CouponRepository couponRepository;
    private final TokenRepository tokenRepository;
    private final IncomeRepository incomeRepository;

    @Autowired
    public DailyExpirationTask(CouponRepository couponRepository,
                            TokenRepository tokenRepository,
                            IncomeRepository incomeRepository) {
        this.couponRepository = couponRepository;
        this.tokenRepository = tokenRepository;
        this.incomeRepository = incomeRepository;
    }

    @Override
    public void run() {
        while (true) {
            try {
                couponRepository.deleteExpiredCoupons();
                tokenRepository.deleteExpiredTokens();
                incomeRepository.deleteExpiredIncomes();
                TimeUnit.DAYS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
