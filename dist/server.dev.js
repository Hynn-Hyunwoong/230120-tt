"use strict";

var dotenv = require('dotenv').config();

var app = require("./app");

var port = process.env.PORT || "3005";

var _require = require("./models"),
    sequelize = _require.sequelize;

var router = require("./routes");

app.use(router);
app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).send(error.message);
});
app.listen(port, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("connecting..");
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.sync({
            force: false
          }));

        case 3:
          console.log("Starting Server with Port Number is ".concat(port));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});