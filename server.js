const express = require('express');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./routes/vehicleRoutes');
const fs = require('fs');

const dataDir = './data';
const dataFile = `${dataDir}/vehicles.json`;
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, '[]');

const app = express();
app.use(bodyParser.json());
app.use('/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
