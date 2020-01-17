package coupon_system.controllers;

import coupon_system.entities.Company;
import coupon_system.entities.Coupon;
import coupon_system.entities.Income;
import coupon_system.entities.Token;
import coupon_system.enums.ClientType;
import coupon_system.enums.CouponType;
import coupon_system.exceptions.CouponSystemException;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.repositories.CompanyRepository;
import coupon_system.repositories.TokenRepository;
import coupon_system.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/company")
public class CompanyController {

    private final CompanyService companyService;
    private final CompanyRepository companyRepository;
    private final TokenRepository tokenRepository;
    private final HttpServletRequest request;

    @Autowired
    public CompanyController(CompanyService companyService,
                             CompanyRepository companyRepository,
                             TokenRepository tokenRepository,
                             HttpServletRequest request) {
        this.companyService = companyService;
        this.companyRepository = companyRepository;
        this.tokenRepository = tokenRepository;
        this.request = request;
    }

    @PostMapping("/coupons")
    public ResponseEntity<?> createCoupon(@RequestBody Coupon coupon) {
        try {
            companyService.createCoupon(getCompany(), coupon);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons/{couponId}")
    public ResponseEntity<?> getCompanyCoupon(@PathVariable long couponId) {
        try {
            Coupon coupon = companyService.getCompanyCoupon(getCompany(), couponId);
            return new ResponseEntity<>(coupon, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons")
    public ResponseEntity<?> getAllCompanyCoupons() {
        try {
            Collection<Coupon> coupons = companyService.getAllCompanyCoupons(getCompany());
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons-by-type/{couponType}")
    public ResponseEntity<?> getAllCompanyCouponsByType(@PathVariable CouponType couponType) {
        try {
            Collection<Coupon> coupons = companyService.getAllCompanyCouponsByType(getCompany(), couponType);
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons-by-price/{price}")
    public ResponseEntity<?> getAllCompanyCouponsByPrice(@PathVariable double price) {
        try {
            Collection<Coupon> coupons = companyService.getAllCompanyCouponsByPrice(getCompany(), price);
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/coupons")
    public ResponseEntity<?> updateCoupon(@RequestBody Coupon coupon) {
        try {
            companyService.updateCoupon(getCompany(), coupon);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/coupons/{couponId}")
    public ResponseEntity<?> deleteCoupon(@PathVariable long couponId) {
        try {
            companyService.deleteCoupon(getCompany(), couponId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/incomes")
    public ResponseEntity<?> getCompanyIncomes() {
        try {
            Collection<Income> incomes = companyService.getCompanyIncomes(getCompany());
            return new ResponseEntity<>(incomes, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private Company getCompany() throws LoginFailedException {
        Token token = null;
        Cookie[] cookies = request.getCookies();
        for (Cookie c : cookies) {
            if (c.getName().equals("auth")) {
                token = tokenRepository.findByClientTypeAndToken(ClientType.COMPANY, c.getValue())
                        .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again."));
            }
        }
        return companyRepository.findById(token.getUserId())
                .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again."));
    }
}
