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
  const { griller } = req.body;
  try {
    // Cập nhật thông tin griller trong cơ sở dữ liệu
    if (!griller.GrillerID || !griller.GrillerName || !griller.GrillerStatus) {
      return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết' });
    }
    const [grillerResults] = await db.query('SELECT GrillerID FROM Griller WHERE GrillerID = ?', [griller.GrillerID]);
    if (grillerResults.length === 0) {
        return res.status(404).json({ status: 'error', message: 'Griller not found.' });
    }
    await db.query(
      `UPDATE Griller 
       SET GrillerName = ?, GrillerStatus = ? 
       WHERE GrillerID = ?`, 
      [griller.GrillerName, griller.GrillerStatus, griller.GrillerID]
    );
    // Gửi phản hồi thành công
    res.status(200).json({ status: true, message: 'Cập nhật griller thành công' });
  } catch (error) {
    // Xử lý lỗi
    res.status(500).json({ error: error.message });
  }
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
  const addGriller = async (req, res) => {
    const { griller } = req.body;
    console.log(griller);
    const [grillerResults] = await db.query('SELECT GrillerID FROM Griller WHERE GrillerID = ?', [griller.GrillerID]);
    if (grillerResults.length > 0) {
        return res.status(401).json({ status: 'error', message: 'exists.' });
    }

    try {
        await db.query('INSERT INTO Griller (GrillerID, GrillerName, GrillerStatus) VALUES (?, ?, ?)', [griller.GrillerID, griller.GrillerName, griller.GrillerStatus]);
        res.status(200).json({ status: true, message: 'Thêm griller thành công' });
    } catch (err) {
        return res.status(500).json({ status: 'error', message: err.message });
    }
  };
module.exports = {
    getAllGrillers: getAllGrillers,
    setGriller: setGriller,
    removeGriller: removeGriller,
    addGriller: addGriller,
};
