package coupon_system.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Customer extends User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private long id;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL, CascadeType.REFRESH})
    @JoinTable(name = "customer_coupon",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "coupon_id"))
    private Collection<Coupon> coupons;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.REMOVE)
    private Collection<Income> incomes;

    public Customer() {
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

    public void setName(String custName) {
        super.setName(custName);
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

    public void purchaseCoupon(Coupon coupon) {
        coupons.add(coupon);
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
        if (!(obj instanceof Customer)) {
            return false;
        }
        Customer other = (Customer) obj;
        return this.id == other.id;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + super.getName() + '\'' +
                ", password='" + super.getPassword() + '\'' +
                ", email='" + super.getEmail() + '\'' +
                ", coupons=" + coupons +
                ", incomes=" + incomes +
                '}';
    }
}
