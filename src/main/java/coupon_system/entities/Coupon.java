package coupon_system.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import coupon_system.enums.CouponType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

@Entity
public class Coupon implements Serializable, Comparable<Coupon> {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Column(nullable = false)
    private int amount;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CouponType couponType;

    @Column(nullable = false)
    private String message;

    @Column(nullable = false)
    public double price;

    @ManyToOne
    private Company company;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(name = "customer_coupon",
            joinColumns = @JoinColumn(name = "coupon_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id"))
    private Collection<Customer> customers;

    public Coupon() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public CouponType getCouponType() {
        return couponType;
    }

    public void setCouponType(CouponType couponType) {
        this.couponType = couponType;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public long getCompanyId() {
        return company.getId();
    }

    @Override
    public int compareTo(Coupon coupon) {
        return Long.compare(this.id, coupon.id);
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
        if (!(obj instanceof Coupon)) {
            return false;
        }
        Coupon other = (Coupon) obj;
        return this.id == other.id;
    }

    @Override
    public String toString() {
        return "Coupon{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", amount=" + amount +
                ", couponType=" + couponType +
                ", message='" + message + '\'' +
                ", price=" + price +
                ", companyId=" + company.getId() +
                '}';
    }
}
