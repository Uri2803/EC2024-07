import db from '../model/database';

let getAllGrillers = async (req, res) => {
  try {
    const [grillers] = await db.query(`SELECT GrillerID, GrillerName , GrillerStatus FROM Griller`);
    res.status(200).json({ status: true, grillers: grillers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let setGriller = async (req, res) => {
  // const { orderID } = req.body;
  //   try {
  //       await db.query(
  //         `UPDATE Orders 
  //          SET OrderStatus = 1 
  //          WHERE OrderID = ?`, 
  //         [orderID]
  //       );
  //     res.status(200).json({ status: true });
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  };

  let removeGriller = async (req, res) => {
    const {grillerID} = req.params;
    console.log(grillerID);
    try {
      if (!grillerID) {
        return res.status(400).json({ status: 'error', message: 'GrillerID is required.' });
      }
      await db.query('DELETE FROM productBatch WHERE GrillerID = ?', [grillerID]);

      const [grillerResults] = await db.query('SELECT GrillerID FROM Griller WHERE GrillerID = ?', [grillerID]);
      if (grillerResults.length === 0) {
          return res.status(404).json({ status: 'error', message: 'Griller not found.' });
      }

      const [result] = await db.query('DELETE FROM Griller WHERE GrillerID = ?', [grillerID]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ status: 'error', message: 'Griller not found in cart.' });
      }
      
      return res.status(200).json({ status: 'success', message: 'Griller and related information deleted successfully.' });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    getAllGrillers: getAllGrillers,
    setGriller: setGriller,
    removeGriller: removeGriller,
};
