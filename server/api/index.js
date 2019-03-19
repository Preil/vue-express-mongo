const express = require('express');
const router = express.Router();
require('./routes/tarnsaction')(router);
require('./routes/user')(router);

module.exports = router;