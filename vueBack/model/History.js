const db = require("../config/dbConnection.js");

class History {
  fetchHistory(req, res) {
    const query = `
        SELECT iID, iName,iOrigin, iDescription, iImg, iYear
        FROM History
        `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

}

module.exports = History;
