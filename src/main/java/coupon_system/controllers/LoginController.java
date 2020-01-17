package coupon_system.controllers;

import coupon_system.entities.Token;
import coupon_system.enums.ClientType;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.main_app.CouponSystem;
import coupon_system.repositories.TokenRepository;
import coupon_system.utilities.DateGenerator;
import coupon_system.utilities.SecureTokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    private final CouponSystem couponSystem;
    private final TokenRepository tokenRepository;

    @Autowired
    public LoginController(CouponSystem couponSystem, TokenRepository tokenRepository) {
        this.couponSystem = couponSystem;
        this.tokenRepository = tokenRepository;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody User user, HttpServletResponse response) {
        switch (user.getClientType()) {
            case ADMIN:
                try {
                    long adminId = couponSystem.login(user.getName(), user.getPassword(), user.getClientType());
                    Token token = new Token(adminId, ClientType.ADMIN, DateGenerator.getDateAfterMonths(2), SecureTokenGenerator.nextToken());
                    return getResponseEntity(response, token);
                } catch (LoginFailedException e) {
                    return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
                }
            case COMPANY:
                try {
                    long companyId = couponSystem.login(user.getName(), user.getPassword(), user.getClientType());
                    Token token = new Token(companyId, ClientType.COMPANY, DateGenerator.getDateAfterMonths(2), SecureTokenGenerator.nextToken());
                    return getResponseEntity(response, token);
                } catch (LoginFailedException e) {
                    return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
                }
            case CUSTOMER:
                try {
                    long customerId = couponSystem.login(user.getName(), user.getPassword(), user.getClientType());
                    Token token = new Token(customerId, ClientType.CUSTOMER, DateGenerator.getDateAfterMonths(2), SecureTokenGenerator.nextToken());
                    return getResponseEntity(response, token);
                } catch (LoginFailedException e) {
                    return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
                }
            default:
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    private ResponseEntity<?> getResponseEntity(HttpServletResponse response, Token token) {
        tokenRepository.save(token);
        Cookie cookie = new Cookie("auth", token.getToken());
        cookie.setMaxAge(/* ~2 months */ 5000000);
        response.addCookie(cookie);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}

class User {
    private String name;
    private String password;
    private ClientType clientType;

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public ClientType getClientType() {
        return clientType;
    }
}
