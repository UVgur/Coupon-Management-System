package coupon_system.utilities;

import coupon_system.repositories.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class LoginFilter extends OncePerRequestFilter {

    private final TokenRepository tokenRepository;

    @Autowired
    public LoginFilter(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }



    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        String path = req.getRequestURL().toString();
        if (!path.contains("login")) {
            if (!path.contains("registration")) {
                Cookie[] cookies = req.getCookies();
                if (cookies != null) {
                    for (Cookie c : cookies) {
                        if ("auth".equals(c.getName())) {
                            if (!tokenRepository.findByToken(c.getValue()).isPresent()) {
                                res.sendRedirect("http://localhost:4200");
                                return;
                            }
                        }
                    }
                }
            }
        }
        filterChain.doFilter(request, response);
    }
}
