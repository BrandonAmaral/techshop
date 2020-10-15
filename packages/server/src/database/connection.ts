import mongoose from 'mongoose';

import mongoConfig from '../config/mongo';

mongoose.connect(`${mongoConfig.db}`, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
