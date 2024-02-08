//use vijay
//show dbs
//show collections

//db.createcollection("client_master");

db.client_master.insertOne({
        ClientNo : 'C00001',
        CName    : 'Ivan Bayross',
        CAddress1: 'A/14',
        CAddress2: 'Worli',
        City     : 'Mumbai',
        Pincode  : 400054 ,
        CState   :'Maharashtra',
        Baldue   : 15000,
    });