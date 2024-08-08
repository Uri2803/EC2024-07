import db from '../model/database';

let getAllProducts = async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM Products');
    res.status(200).json({status: true, products:products});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let getProductDetail = async (req, res) =>{
    const productID = req.params.productID;
    if(productID){
        try{
            console.log(productID)
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
