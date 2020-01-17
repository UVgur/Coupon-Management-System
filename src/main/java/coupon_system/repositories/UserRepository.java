package coupon_system.repositories;

import coupon_system.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT DISTINCT u FROM User u WHERE UPPER(u.name) LIKE UPPER(:name) AND u.password = :password")
    Optional<User> login(String name, String password);
}
