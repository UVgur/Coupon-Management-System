# Coupon System Project
    Full-stack Java Project, John Bryce - Java course (end) project.
The Coupon System Project acts as a Micro Service,
that shows an implementation which allows companies to CRUD coupons for their customers.
then the Customers can purchase and use those Coupons, and get a discount in that company's "business".

The Admin of the system have some extra utilities, such as:
        
    monitor and view information that is gathered by the transactions.



Used technologies:

    Backend: Spring Boot.
      -Libraries: web, spring-data-JPA(Hibernate).
      -Build tool: Maven.
    Frontend: Angular 7.
      -Libraries: animate.css, materialize-css.
      -Build tool: npm.
    Database: MySQL.
    
main entities(*):

    Admin – can create, read, update, delete -> companies, coupons & customers.
    Company – can create, read, update, delete coupons.
    Customer – can check available coupons, purchase them and check list of purchased coupons.


Guide How-To-Use:

    Register your 'USER' via register page,choose:
        -username
        -email
        -password
        -ClientType(*)
    Then Login with that 'USER'.
  
    then depends on the ClientType you choose for your 'USER',
    you can interact with the Coupon functionalty(view, buy, sell...)
  

# Coupon System

Project of full-stack Java course.

About the project:
There are three entities:

1. Admin – can create, read, update, delete -> companies, coupons and customers.
2. Company – can create, read, update, delete coupons.
3. Customer – can check available coupons, purchase them and check list of purchased coupons.

Used technologies:
Backend:

- Data access: Spring boot & Hibernate.
- Database: MySQL.
- Build tool: Maven.

Frontend:

- Framework: Angular 7.
- Libraries: animate.css, materialize-css.
- Build tool: npm.

Instructions:

1. Go to "Client" folder and run "npm i" to install Node dependencies.
2. Go to Angular -> use the command "ng serve" to run the client side.(port:4200)
3. Go to "Server" folder and run the Spring application. (port:8080)
4. after that you have to run MySQL server.

Now you can login like Admin
( Username and Password – “admin”)
|| just register new company or customer.


