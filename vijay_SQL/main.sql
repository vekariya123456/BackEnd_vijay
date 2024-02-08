create table user(
    id int,
    firstname varchar(20),
    lastname varchar(30),
    gender varchar(20),
    email varchar(20),
    mobileno int
);

insert into user(id,firstname,lastname,gender,email,mobileNO)value(1,'vijay','vekariya','Male','vijay@test.in',9913321733);

insert into user(id,firstname,lastname,gender,email,mobileNO) value
(2,'bhautik','patel','Male','bhautik@test.in',12345666),
(3,'Monika','kathiriya','Female','monika@rtest.in',12345555),
(4,'shrusti','sojitra','Female','shrusti@test.in',25647755),
(5,'dhaval','solanki','Male','dhaval@test.in',4587888);

insert into user value(6,'jenil','kakadiya','Male','jenil@test.in',25478888);

insert into user(id,firstname,lastname,gender,mobileNO) value
(7,'krish','rangani','Male',54785214),
(8,'Mahendra','purohit','Male',54778895);

insert into user value
(9,'Vrishabh','Jogani','Male',123456789);