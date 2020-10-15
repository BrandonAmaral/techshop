interface MongoConfig {
  db: string;
}

export default {
  db: process.env.DATABASE,
} as MongoConfig;
