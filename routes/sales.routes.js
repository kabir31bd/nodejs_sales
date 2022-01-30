module.exports = app => {
    //const sales = require("../controllers/sales.controller.js");
    const sales = require('../controllers/sales.controller');

    var router = require("express").Router();

    
    // retrieve all sales
    router.get("/",sales.getSales);
    
    

    // SalesSummary
    router.get("/summary",sales.SalesSummary);

    
    // Create a Sale
    router.post("/create", sales.createSale);

    // Update a single sale with id  
    router.put("/:id",sales.updateSale);

    // Delete a single sale with id  
    router.delete("/:id",sales.deleteSale);

    
    // retrieve a single sale with id  
    router.get("/:id",sales.getSalesById);

    
    
    app.use("/api/sales", router);
};