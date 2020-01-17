package coupon_system.controllers;

import coupon_system.entities.Company;
import coupon_system.entities.Coupon;
import coupon_system.entities.Customer;
import coupon_system.entities.Income;
import coupon_system.enums.ClientType;
import coupon_system.exceptions.CouponSystemException;
import coupon_system.exceptions.LoginFailedException;
import coupon_system.repositories.TokenRepository;
import coupon_system.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    private final TokenRepository tokenRepository;
    private final HttpServletRequest request;

    @Autowired
    public AdminController(AdminService adminService,TokenRepository tokenRepository,HttpServletRequest request) {
        this.adminService = adminService;
        this.tokenRepository = tokenRepository;
        this.request = request;
    }

    /**
     * COMPANY methods
     */
    @PostMapping("/companies")
    public ResponseEntity<?> createCompany(@RequestBody Company company) {
        try {
            cookieCheck();
            adminService.createCompany(company);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/companies/{companyId}")
    public ResponseEntity<?> getCompanyById(@PathVariable long companyId) {
        try {
            cookieCheck();
            Company company = adminService.getCompanyById(companyId);
            return new ResponseEntity<>(company, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/companies")
    public ResponseEntity<?> getAllCompanies() {
        try {
            cookieCheck();
            Collection<Company> companies = adminService.getAllCompanies();
            return new ResponseEntity<>(companies, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/companies")
    public ResponseEntity<?> updateCompany(@RequestBody Company company) {
        try {
            cookieCheck();
            adminService.updateCompany(company);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/companies/{companyId}")
    public ResponseEntity<?> deleteCompany(@PathVariable long companyId) {
        try {
            cookieCheck();
            adminService.deleteCompany(companyId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (LoginFailedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * COUPON methods
     */
    @PostMapping("/coupons/{companyId}")
    public ResponseEntity<?> createCoupon(@RequestBody Coupon coupon, @PathVariable long companyId) {
        try {
            cookieCheck();
            adminService.createCoupon(companyId, coupon);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons/{couponId}")
    public ResponseEntity<?> getCouponById(@PathVariable long couponId) {
        try {
            cookieCheck();
            Coupon coupon = adminService.getCouponById(couponId);
            return new ResponseEntity<>(coupon, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/coupons")
    public ResponseEntity<?> getAllCoupons() {
        try {
            cookieCheck();
            Collection<Coupon> coupons = adminService.getAllCoupons();
            return new ResponseEntity<>(coupons, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/coupons/{companyId}")
    public ResponseEntity<?> updateCoupon(@RequestBody Coupon coupon, @PathVariable long companyId) {
        try {
            cookieCheck();
            adminService.updateCoupon(companyId, coupon);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/coupons/{couponId}")
    public ResponseEntity<?> deleteCoupon(@PathVariable long couponId) {
        try {
            cookieCheck();
            adminService.deleteCoupon(couponId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (LoginFailedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * CUSTOMER methods
     */
    @PostMapping("/customers")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
        try {
            cookieCheck();
            adminService.createCustomer(customer);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/customers/{customerId}")
    public ResponseEntity<?> getCustomerById(@PathVariable long customerId) {
        try {
            cookieCheck();
            Customer customer = adminService.getCustomerById(customerId);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/customers")
    public ResponseEntity<?> getAllCustomers() {
        try {
            cookieCheck();
            Collection<Customer> customers = adminService.getAllCustomers();
            return new ResponseEntity<>(customers, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping( "/customers")
    public ResponseEntity<?> updateCustomer(@RequestBody Customer customer) {
        try {
            cookieCheck();
            adminService.updateCustomer(customer);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/customers/{customerId}")
    public ResponseEntity<?> deleteCustomer(@PathVariable long customerId) {
        try {
            cookieCheck();
            adminService.deleteCustomer(customerId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (LoginFailedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * INCOME methods
     */
    @GetMapping("/incomes")
    public ResponseEntity<?> getAllIncomes() {
        try {
            cookieCheck();
            Collection<Income> incomes = adminService.getAllIncomes();
            return new ResponseEntity<>(incomes, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/company-incomes/{companyId}")
    public ResponseEntity<?> getCompanyIncomes(@PathVariable long companyId) {
        try {
            cookieCheck();
            Collection<Income> incomes = adminService.getCompanyIncomes(companyId);
            return new ResponseEntity<>(incomes, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/customer-incomes/{customerId}")
    public ResponseEntity<?> getCustomerIncomes(@PathVariable long customerId) {
        try {
            cookieCheck();
            Collection<Income> incomes = adminService.getCustomerIncomes(customerId);
            return new ResponseEntity<>(incomes, HttpStatus.OK);
        } catch (CouponSystemException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private void cookieCheck() throws LoginFailedException {
        Cookie[] cookies = request.getCookies();
        for (Cookie c : cookies) {
            if (c.getName().equals("auth")) {
                if (!tokenRepository.findByClientTypeAndToken(ClientType.ADMIN, c.getValue()).isPresent()) {
                    throw new LoginFailedException("Authorization is failed, please try again.");
                }
            }
        }
    }
}
