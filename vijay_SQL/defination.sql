-- select name, city from client_master;
-- select *, city from client_master;
-- select name as "Full Name" from client_master;
-- select name as "Full Name", city "District" from client_master;


-- -- Where clause
-- select * from client_master where city = 'mumbai';
-- select * from client_master where baldue < 5000;
-- select * from client_master where baldue >= 5000;
-- select * from client_master where baldue = 5000;



-- -- order by
-- select * from client_master order by city desc, baldue asc;
-- select * from client_master order by city desc;



-- -- update query
-- update client_master set baldue = 1000 // all record update
-- update client_master set baldue = 1000, city = 'Navi Mumbai' where baldue = 0;


-- -- delete query
-- delete from client_master;
-- delete from client_master where address1 = '66';



--  -- drop statement 
-- drop table client_master;
-- drop database node_8am;