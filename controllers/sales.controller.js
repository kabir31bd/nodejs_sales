const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sales_module',
    password: 'pg@123',
    port: 5432,
})

pool.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });

const getSales = (request, response) => {  
    try{
        pool.query('SELECT * FROM "Sales" ORDER BY id ASC', (error, results) => {        
            response.status(200).json(results.rows)
            })   
    }
    catch  (err) {
        console.log(err.stack)   
               
    }
}

const getSalesById = (request, response) => {
  const id = parseInt(request.params.id)
  try{
    pool.query('SELECT * FROM "Sales" WHERE id = $1', [id], (error, results) => {        
        response.status(200).json(results.rows)
        })   
    }
    catch  (err) {
        console.log(err.stack)    
         
    }
}

const createSale = (request, response) => {
  const { username, amount, date } = request.body

  try{
    pool.query('INSERT INTO "Sales" (username, amount, date) VALUES ($1, $2, $3)', [username, amount, date], (error, results) => {      
        response.status(200).json(results.rows)
        })   
    }
    catch  (err) {
        console.log(err.stack)   
         
    }
}

const updateSale = (request, response) => {
  //const id = parseInt(request.params.id)
  const { id, username, amount, date } = request.body

  try{
    pool.query(
        'UPDATE "Sales" SET username = $1, amount = $2, date= $3 WHERE id = $4',
        [username, amount, date, id],
        (error, results) => {      
        response.status(200).json(results.rows)
        })   
    }
    catch  (err) {
        console.log(err.stack)    
        
    }


}

const deleteSale = (request, response) => {
  const id = parseInt(request.params.id)

  
  try{
    pool.query('DELETE FROM "Sales" WHERE id = $1', [id], (error, results) => {      
        response.status(200).json(results.rows)
        })   
    }
    catch  (err) {
        console.log(err.stack)  
           
    }



}


const SalesSummary = (request, response) => {
    const paramname = request.body.name;
    if (paramname==="daily")
    {
        const Sql =  `SELECT DATE_TRUNC('hour',date) AS sales_to_daily, SUM(amount) AS amount FROM "Sales"  GROUP BY DATE_TRUNC('hour',date);`        
        try{
            pool.query(Sql,  (error, results) => { 
                if (error)
                {
                    console.log(err.stack)
                }
                if (!results || !results.rows || !results.rows.length) return [];       
                response.status(200).json(results.rows)
                })    
            
        }
        catch  (err) {
            console.log(err.stack)                    
        }
    }
    else if (paramname==="weekly")
    {
        const Sql =  `SELECT DATE_TRUNC('day',date) AS sales_to_weekly, SUM(amount) AS amount FROM "Sales"  GROUP BY DATE_TRUNC('day',date);`        
        try{
            pool.query(Sql,  (error, results) => {
                if (error)
                {
                    console.log(err.stack)
                }
                if (!results || !results.rows || !results.rows.length) return [];        
                response.status(200).json(results.rows)
                })    
            
        }
        catch  (err) {
            console.log(err.stack)                    
        }
        
    }
    else if (paramname==="monthly")
    {
        const Sql =  `SELECT DATE_TRUNC('day',date) AS sales_to_monthly, SUM(amount) AS amount FROM "Sales"  GROUP BY DATE_TRUNC('day',date);`        
        try{
            pool.query(Sql, (error, results) => {
                if (error)
                {
                    console.log(err.stack)
                }
                if (!results || !results.rows || !results.rows.length) return [];        
                response.status(200).json(results.rows)
                })    
            
        }
        catch  (err) {
            console.log(err.stack)                    
        }
    }
}
module.exports = {
  getSales,
  getSalesById,
  createSale,
  updateSale,
  deleteSale,
  SalesSummary
}