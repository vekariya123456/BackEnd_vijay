select sod.*,cm.CName,pm.Description from sales_orderdetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on cm.ClientNo = so.ClientNo
inner join product_master pm on pm.ProductNo = sod.ProductNo 
where CName = 'Ivan Bayross';

select distinct pm.ProductNo,pm.Description from sales_orderdetail sod
inner join product_master pm on pm.ProductNo = sod.ProductNo;

