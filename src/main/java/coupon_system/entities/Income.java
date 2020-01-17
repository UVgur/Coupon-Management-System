package coupon_system.entities;

import coupon_system.enums.IncomeType;
import javax.persistence.*;



import java.io.Serializable;
import java.util.Date;

@Entity
public class Income implements Serializable, Comparable<Income> {

    public Income() {
    }

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Company company;

    @ManyToOne
    private Customer customer;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date expDate;

    @Enumerated(EnumType.STRING)
    private IncomeType description;


    private double price;


    public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}



    // constructor for Company-income
	public Income(Company company, Date date, Date expDate, IncomeType description, Double price) {
        this.company = company;
        this.date = date;
        this.description = description;
        this.expDate = expDate;
        this.price = price;
    }

    //constructor for Customer-income
    public Income(Customer customer,Double price, Date date, Date expDate, IncomeType description) {
        this.customer = customer;
        this.date = date;
        this.description = description;
        this.expDate = expDate;
        this.price = price;
    }

    // constructor for Admin-income
    public Income(Date date, Date expDate, IncomeType description) {
        this.date = date;
        this.description = description;
        this.expDate = expDate;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }

    public IncomeType getDescription() {
        return description;
    }

    public void setDescription(IncomeType description) {
        this.description = description;
    }

    public String getCompanyName() {
        if (company != null) {
            return company.getName();
        } else {
            return null;
        }
    }

    public String getCustomerName() {
        if (customer != null) {
            return customer.getName();
        } else {
            return null;
        }
    }

    @Override
    public int compareTo(Income company) {
        return Long.compare(this.id, company.id);
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
        if (!(obj instanceof Income)) {
            return false;
        }
        Income other = (Income) obj;
        return this.id == other.id;
    }

    @Override
    public String toString() {
        return "Income{" +
                "id=" + id +
                ", company=" + company +
                ", customer=" + customer +
                ", date=" + date +
                ", description=" + description +
                '}';
    }
}
