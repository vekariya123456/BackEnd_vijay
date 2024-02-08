db.sales_orderDetail.insertMany([
    {
        OrderNo: "O19001",
        ProductNo: "P00001",
        QtyOrdered: 4,
        QtyDisp: 4,
        ProductRate: 525
    },
    {
        OrderNo: "O19001",
        ProductNo: "P07965",
        QtyOrdered: 2,
        QtyDisp: 1,
        ProductRate: 8400
    },
    {
        OrderNo: "O19001",
        ProductNo: "P07885",
        QtyOrdered: 2,
        QtyDisp: 1,
        ProductRate: 5250
    },
    {
        OrderNo: "O19002",
        ProductNo: "P00001",
        QtyOrdered: 10,
        QtyDisp: 0,
        ProductRate: 525
    },
    {
        OrderNo: "O46865",
        ProductNo: "P07868",
        QtyOrdered: 3,
        QtyDisp: 3,
        ProductRate: 3150
    },
    {
        OrderNo: "O46865",
        ProductNo: "P07885",
        QtyOrdered: 3,
        QtyDisp: 1,
        ProductRate: 5250
    },
    {
        OrderNo: "O46865",
        ProductNo: "P00001",
        QtyOrdered: 10,
        QtyDisp: 10,
        ProductRate: 525
    },
    {
        OrderNo: "O46865",
        ProductNo: "P0345",
        QtyOrdered: 4,
        QtyDisp: 4,
        ProductRate: 1050
    },
    {
        OrderNo: "O19003",
        ProductNo: "P03453",
        QtyOrdered: 2,
        QtyDisp: 2,
        ProductRate: 1050
    },
    {
        OrderNo: "O19003",
        ProductNo: "P06734",
        QtyOrdered: 1,
        QtyDisp: 1,
        ProductRate: 12000
    },
    {
        OrderNo: "O46866",
        ProductNo: "P07965",
        QtyOrdered: 1,
        QtyDisp: 0,
        ProductRate: 8400
    },
    {
        OrderNo: "O46866",
        ProductNo: "P07975",
        QtyOrdered: 1,
        QtyDisp: 0,
        ProductRate: 1050
    },
    {
        OrderNo: "O19008",
        ProductNo: "P00001",
        QtyOrdered: 10,
        QtyDisp: 5,
        ProductRate: 525
    },
    {
        OrderNo: "O19008",
        ProductNo: "P07975",
        QtyOrdered: 5,
        QtyDisp: 5,
        ProductRate: 1050
    }
]);


db.salesOrder.aggregate([
    {
        $lookup: {
               from: "client_masters",
               localField: "ClientNo",
               foreignField: "ClientNo",
               as: "Client"
             }
    },
    {
        $lookup: {
               from: "salesman_master",
               localField: "SalesmanNo",


foreignField: "SalesmanNo",
               as: "Salesman"
             }
    },
    {
        $lookup: {
               from: "sales_orderDetail",
               localField: "OrderNo",
               foreignField: "OrderNo",
               as: "Order"
             }
    },
    {
        $lookup: {
               from: "product_masters",
               localField: "Order.ProductNo",
               foreignField: "ProductNo",
               as: "No"
             }
    }
    ]);