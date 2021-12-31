const db = require("../db");
class CitiesController {
  async getCities(req, res) {
    const query = require("url").parse(req.url, true).query;
    const cities = await db.query(
      query.value
        ? `SELECT * FROM cities WHERE ${query.column} ${query.filter} '${
            query.filter !== "like" ? query.value : "%" + query.value + "%"
          }' ORDER BY ${query.orderBy} ${query.order} LIMIT 10 OFFSET ${
            (query.page - 1) * 10
          }`
        : `SELECT * FROM cities ORDER BY ${query.orderBy} ${
            query.order
          } LIMIT 10 OFFSET ${(query.page - 1) * 10}`
    );

    res.json(cities.rows);
  }
  async getRowNum(req, res) {
    const query = require("url").parse(req.url, true).query;
    const rowNum = await db.query(
      query.value
        ? `SELECT COUNT(*) FROM cities WHERE ${query.column} ${query.filter} '${
            query.filter !== "like" ? query.value : "%" + query.value + "%"
          }'`
        : `SELECT COUNT(*) FROM cities`
    );
    res.json(rowNum.rows);
  }
}

module.exports = new CitiesController();
