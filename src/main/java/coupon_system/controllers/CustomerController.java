package coupon_system.controllers;

import coupon_system.entities.Coupon;
import coupon_system.entities.Customer;
import coupon_system.entities.Token;
import coupon_system.enums.ClientType;
import coupon_system.enums.CouponType;
import coupon_system.exceptions.CouponSystemException;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.exceptions.couponExceptions.CouponUnavaliableException;
import coupon_system.repositories.CustomerRepository;
import coupon_system.repositories.TokenRepository;
import coupon_system.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerRepository customerRepository;
    private final TokenRepository tokenRepository;
    private final HttpServletRequest request;

    @Autowired
    public CustomerController(CustomerService customerService,
                              CustomerRepository customerRepository,
                              TokenRepository tokenRepository,
                              HttpServletRequest request) {
        this.customerService = customerService;
        this.customerRepository = customerRepository;
        this.tokenRepository = tokenRepository;
        this.request = request;
    }

    @GetMapping("/coupons/{couponId}")
    public ResponseEntity<?> purchaseCoupon(@PathVariable long couponId) {
        try {
            customerService.purchaseCoupon(getCustomer(), couponId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons")
    public ResponseEntity<?> getAllCustomerCoupons() {
        try {
            Collection<Coupon> coupons = customerService.getPurchasedCoupons(getCustomer());
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons-by-type/{couponType}")
    public ResponseEntity<?> getPurchasedCouponsByType(@PathVariable CouponType couponType) {
        try {
            Collection<Coupon> coupons = customerService.getPurchasedCouponsByType(getCustomer(), couponType);
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons-by-price/{price}")
    public ResponseEntity<?> getPurchasedCouponsByPrice(@PathVariable double price) {
        try {
            Collection<Coupon> coupons = customerService.getPurchasedCouponsByPrice(getCustomer(), price);
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons-available")
    public ResponseEntity<?> getAllAvailableCoupons() {
        try {
            Collection<Coupon> coupons = customerService.getAllAvailableCoupons();
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponUnavaliableException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private Customer getCustomer() throws LoginFailedException {
        Token token = null;
        Cookie[] cookies = request.getCookies();
        for (Cookie c : cookies) {
            if (c.getName().equals("auth")) {
                token = tokenRepository.findByClientTypeAndToken(ClientType.CUSTOMER, c.getValue())
                        .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again."));
            }
        }
        return customerRepository.findById(token.getUserId())
                .orElseThrow(() -> new LoginFailedException("Authorization is failed, please try again."));
    }
}
