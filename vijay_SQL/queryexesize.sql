use vijay;

select so.OrderNo,cm.CName,sm.SalesmanName from sales_order so 
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join salesman_master sm on so.SalesmanNO = sm.SalesmanNO;



select sod.*,cm.CName,pm.Description from sales_orderdetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where CName = "ivan Bayross";



select sod.ProductNo,pm.Description,sod.QtyOrdered,sod.QtyDisp,so.OrderDate from sales_order so 
JOIN sales_orderdetail sod on so.OrderNo = sod.OrderNo
JOIN product_master pm on sod.ProductNo = pm.ProductNo
where MONTH(so.DelyDate) = MONTH(current_date()) AND YEAR(so.DelyDate)=YEAR(current_date());


select distinct pm.ProductNo,pm.Description from sales_orderdetail sod
inner join product_master pm on pm.ProductNo = sod.ProductNo;

select sod.*,cm.CName,pm.ProductNo,pm.Description from sales_orderdetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on cm.ClientNo = so.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where Description = "Trousers";


select so.OrderNo,cm.CName,pm.Description,sod.QtyOrdered from sales_orderdetail sod
JOIN sales_order so on so.OrderNo = sod.OrderNo
JOIN client_master cm on cm.ClientNo = so.ClientNo
JOIN product_master pm on pm.ProductNo = sod.ProductNo
WHERE pm.Description = 'Pull overs'AND sod.QtyOrdered < 5;


select sod.*,cm.CName,pm.Description  
from sales_orderdetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on cm.ClientNo = so.ClientNo
inner join product_master pm on pm.ProductNo = sod.ProductNo
where cm.CName in ('Ivan bayross','Mamta Muzumdar');

select sod.*,pm.Description,cm.CName,cm.ClientNo from sales_orderdetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join product_master pm on pm.ProductNo = sod.ProductNo
inner join client_master cm on cm.ClientNo = so.ClientNo
where cm.ClientNo in ('C00001','C00002'); 