select * from customers;

select * from customers limit 10;

select * from customers where country = 'USA' and city = 'nyc';

select * from customers where country = 'USA' and city = 'nyc' and customerNumber > 400;

select * from customers where country = 'USA' or customerNumber >= 400;

select * from customers where country = 'USA' or country = 'Germany' or country = 'italy';

select * from customers where country in ('USA','Germany','France');

select * from customers where country not in ('USA','Germany','italy');

select * from customers where customerNumber >=200 and customerNumber <=400;

select *from customers where customerNumber between 200 and 350;

select *from customers where customerNumber not between 200 and 350;

select *from customers where customerName like 'mini%';

select * from customers where customerName like '%co';

select * from customers where customerName like '%model%';

select * from customers where customerName like '_o%';

select * from customers where customerName like '%o_';


select * from customers where customerName like '_O_____';

select * from customers;

select * from customers where customerName like '%o';

select * from customers where customerName like '%_s'
