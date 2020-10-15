import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import uploadConfig from './config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on http://localhost:${process.env.SERVER_PORT}`);
});

export default app;
