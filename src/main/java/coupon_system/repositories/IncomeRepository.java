package coupon_system.repositories;

import coupon_system.entities.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.Collection;
import java.util.Optional;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Income i WHERE i.expDate < CURRENT_DATE")
    void deleteExpiredIncomes();


    //findAll
	@Query("SELECT i FROM Income i")
    Optional<Collection<Income>> findAllIncomes();

    //findCompanyIncome
    @Query("SELECT i FROM Income i WHERE i.company.id = :companyId")
    Optional<Collection<Income>> findCompanyIncomes(long companyId);

    //findCustomerIncome
    @Query("SELECT i FROM Income i WHERE i.customer.id = :companyId")
    Optional<Collection<Income>> findCustomerIncomes(long companyId);

}
