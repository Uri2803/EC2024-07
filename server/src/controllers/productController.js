import db from '../model/database';

let getAllProducts = async (req, res) => {
  try {
    const { typePoduct, flavor, minPrice, maxPrice } = req.query;
    let query = 'SELECT * FROM Products JOIN TypeProducts ON TypeProducts.TypeProductID = Products.TypeProductID WHERE 1=1';
    let queryParams = [];
    if (typePoduct) {
      const typeProductNames = typePoduct.split(',')
      query += ' AND TypeProducts.TypeProductName IN (?)';
      queryParams.push(typeProductNames);
    }
    
    if (flavor) {
      const flavors = flavor.split(',').map(f => f.trim()); 
      query += ' AND (' + flavors.map(() => 'Products.ProductName LIKE ?').join(' OR ') + ')';
      queryParams.push(...flavors.map(f => `%${f}%`)); 
    }
    if (minPrice) {
      query += ' AND Products.Price >= ?';
      queryParams.push(Number(minPrice));
    }

    if (maxPrice) {
      query += ' AND Products.Price <= ?';
      queryParams.push(Number(maxPrice));
    }
    const [products] = await db.query(query, queryParams);

    
    res.status(200).json({ status: true, products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



let getProductDetail = async (req, res) =>{
  const { productID } = req.params;
    if(productID){
        try{
            const [product] = await db.query('SELECT * FROM Products WHERE Products.ProductID = ? ', [productID])
            res.status(200).json({status: true, product:product[0]});

        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }
    else{
        res.status(500).json({ error: 'NO data' });

    }
}

module.exports = {
  getAllProducts: getAllProducts,
  getProductDetail: getProductDetail,
};
