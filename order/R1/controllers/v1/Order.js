'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var OrderImplementation = require('../../../implementation/OrderService.js');
    
var OrderData;

        


        module.exports.getOrder = function getOrder (req, res, next) {
        var args = req.swagger.params;
        OrderImplementation.getOrder(args, (error, data) => {
            OrderData = data;
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
        });
    };
    
                
        


    
                module.exports.putOrder = function putOrder (req, res, next) {
        var args = req.swagger.params;
        OrderImplementation.patchOrder(args, (error, data) => {
            OrderData = data;
            if (Object.keys(OrderData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(OrderData || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postOrder = function postOrder (req, res, next) {
        var args = req.swagger.params;
        OrderImplementation.postOrder(args, (error, data) => {
            OrderData = data;
            if (Object.keys(OrderData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(OrderData || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchOrder = function patchOrder (req, res, next) {
        var args = req.swagger.params;
        OrderImplementation.patchOrder(args, (error, data) => {
            OrderData = data;
            if (Object.keys(OrderData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(OrderData || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteOrder = function deleteOrder (req, res, next) {
        var args = req.swagger.params;
        OrderImplementation.deleteOrder(args, (error, data) => {
            OrderData = data;
            if (Object.keys(OrderData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(OrderData || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
