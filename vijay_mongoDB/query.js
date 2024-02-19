// use vijay

// db.products.find();

// db.salesman_master.find()
// db.salesman_master.deleteOne({Name:"Aman"})
// db.salesman_master.find()
// db.books.find()
// db.books.find({pages:{$eq:209}})
// db.books.find({pages:{$gte:209}})
// db.books.find({pages:{$lt:209}})
// db.books.find({pages:{$lte:209}})
// db.books.find({pages:{$ne:209}})
// db.books.find({pages:{$in:[209,224,920]}})
// db.books.find({pages:{$nin:[209,224,920]}})
// db.books.find({$and: [{pages:{$lte:209}},{language:"English"},{country:"Ireland"}]})
// db.books.find({$or: [{pages:{$eq:209}},{language:"English"},{country:"France"}]})
// db.books.find({$nor:[{pages:{$lte:200}},{language:"French"},{country:"Ireland"}]})
// db.books.find({pages:{$not:{$lte:209}}})


// db.books.aggregate([
//     {
//         $match: {"pages":{$gte:209},"language":"English"}
        
//     },
//     {
//         $project: {
//             author:1,
//             country:1,
//             year:1,
            
//         }
//     }
    
//     ])

// db.books.find({"pages":{$gte:209}},{"author":1})
// db.books.find().project({"author":1,"pages":1})
// db.books.find().select({"author":1,"pages":1,"_id":0})

// db.books.aggregate([
//     {
//         $limit: 15
//     }
//     ])

// db.books.find().limit(20)

// db.books.aggregate([
//     {
//         $limit: 15
//     }
//     {
//         $skip: 6
//     }
//     ])

// db.books.find().skip(5)



// db.books.aggregate([
//     {
//         $group: { _id: "$language",total: {$sum: 1}},
//     }
    
//     ])

// db.books.aggregate([
//     {
//         $group: { _id: {language:"$language",author:"author"},total: {$sum: 1}},
//     }
//     ])

// db.books.aggregate([
//     {
//         $group: { 
//             _id: {language: "$language"},
//             author: {$push: "$author"},
//             total: {$sum: 1}
//         },
//     }
//     ])





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