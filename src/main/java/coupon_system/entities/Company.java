package coupon_system.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Company extends User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private long id;

    @OneToMany(mappedBy = "company", cascade = CascadeType.REMOVE)
    private Collection<Coupon> coupons;

    @OneToMany(mappedBy = "company", cascade = CascadeType.REMOVE)
    private Collection<Income> incomes;

    public Company() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return super.getName();
    }

    public void setName(String compName) {
        super.setName(compName);
    }

    public String getPassword() {
        return super.getPassword();
    }

    public void setPassword(String password) {
        super.setPassword(password);
    }

    public String getEmail() {
        return super.getEmail();
    }

    public void setEmail(String email) {
        super.setEmail(email);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (id ^ (id >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Company)) {
            return false;
        }
        Company other = (Company) obj;
        return this.id == other.id;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + super.getName() + '\'' +
                ", password='" + super.getPassword() + '\'' +
                ", email='" + super.getEmail() + '\'' +
                ", coupons=" + coupons +
                ", incomes=" + incomes +
                '}';
    }
}
