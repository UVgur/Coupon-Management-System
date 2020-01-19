# Coupon System Project
This project acts as a Micro Service (api),
which add's the functionalty of 'Coupon System' into a larger applicatio(e-store)
    Full-stack Java Project, John Bryce - Java course (end) project.






Used technologies:

    Backend: Spring boot & Spring-Data-JPA(Hibernate).
      -Libraries: web, 
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
  
