
use vijay;
 
select so.*,cm.Cname from sales_order so, client_master cm where so.clientNo = cm.clientNo;

select so.*,cm.Cname from sales_order so inner join client_master cm on so.ClientNo = cm.ClientNo;

select so.*, cm.Cname from sales_order so left join client_master cm on so.ClientNo = cm.ClientNo;

select so.*,cm.Cname ,cm.city from sales_order so right join client_master cm on so.ClientNo = cm.ClientNo order by cm.City desc;

select sod.*, cm.Cname, pm.DESCRIPTION from sales_orderdetail sod 
inner join product_master pm on pm.ProductNo = sod.ProductNo
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo; 