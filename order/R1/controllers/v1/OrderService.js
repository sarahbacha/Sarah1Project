'use strict';
  var OrderFD = require('../../sampleData/v1/Order.json');
  var OrderData = OrderFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getOrder = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(OrderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, OrderData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putOrder = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(OrderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(OrderData[Object.keys(OrderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postOrder = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(OrderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(OrderData[Object.keys(OrderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchOrder = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(OrderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(OrderData[Object.keys(OrderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteOrder = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(OrderData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(OrderData[Object.keys(OrderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


