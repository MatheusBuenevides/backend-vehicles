import express from 'express';
import bodyParser from 'body-parser';
import vehicleRoutes from './routes/vehicleRoutes.js';
import fs from 'fs';

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
