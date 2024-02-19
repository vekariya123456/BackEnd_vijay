// db.sales_orderDetail.find()

// db.sales_orderDetail.aggregate([
//     {
//         $lookup: {
//                from: "product_masters",
//                localField: "ProductNo",
//                foreignField: "ProductNo",
//                as: "ProductNo",
//              }
//     },
//     {
//         $lookup: {
//                from: "salesOrder",
//                localField: "OrderNo",
//                foreignField: "OrderNo",
//                as: "OrderNo",
//                pipeline:[
//                    {
//                        $lookup: {
//                               from: "client_masters",
//                               localField: "ClientNo",
//                               foreignField: "ClientNo",
//                               as: "ClientNo"
//                             }
//                    },
//                    {$unwind: "$ClientNo"},
//                    {$project: {
//                        "ClientNo.Name":1,
//                        "ClientNo.City": 1,
//                        "ClientNo.BalDue": 1,
//                    }}
//                    ]
//              }
//     },
//     {
//       $unwind: "$ProductNo"  
//     },
//     {
//         $project: {
//             OrderNo: 1,
//             "ProductNo.Description": 1,
//             "ProductNo.QtyOnHand": 1,
//             QtyOrdered: 1,
//             ProductRate:1,
//         }
//     }
//     ])