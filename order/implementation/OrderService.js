'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Order.json';
var bodyParam = 'orders/v1'; 
     


exports.getOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var OrderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var OrderData = [];
    if(OrderFD) {
        OrderData = JSON.parse(OrderFD);
    }
    cb(null, OrderData);
}





exports.putOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var OrderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var OrderData = [];
   if(OrderFD) {
       OrderData = JSON.parse(OrderFD);
   }
   OrderData.push(body);

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(OrderData));
   cb(null, "One record has been updated: "+body[Object.keys(body)[0]]);
}


exports.postOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var OrderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var OrderData = [];
    if(OrderFD) {
        OrderData = JSON.parse(OrderFD);
    }
    OrderData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(OrderData));
    cb(null, "One record has been added: "+body[Object.keys(body)[0]]);
}


exports.patchOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var OrderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var OrderData = [];
   if(OrderFD) {
       OrderData = JSON.parse(OrderFD);
   }
   OrderData.push(body);

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(OrderData));
   cb(null, "One record has been updated: "+body[Object.keys(body)[0]]);
}



exports.deleteOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var OrderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var OrderData = [];
   if(OrderFD) {
       OrderData = JSON.parse(OrderFD);
   }
   var found = false;
   for(var i=0;i<OrderData.length;i++) {
       if(JSON.stringify(body)==JSON.stringify(OrderData[i])) {
            OrderData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(OrderData));
   if(found) {
    cb(null, "One record has been deleted");
   }
   else {
    cb(null, "No record has been deleted");
   }
}


