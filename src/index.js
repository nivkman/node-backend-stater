import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./routes/v1.js";
import { initializeMongoDb } from "mongoose-light";
import { initializeKafka } from "kafka-node-handler";
import { onNewMessage } from "./messaging/messageHandler.js";
import { runCronJobs } from "./cron/index.js";
import config from "./config/index.js"; 
import cors from "cors";
const app = express();

app.use(cors());

// connecting to db
// initializeMongoDb({
//   databaseUrl: config.DATABASEURL,
//   service: config.SERVICE,
// });

// connecting to kafka
// initializeKafka({
//   topic: config.TOPIC,
//   groupId: config.GROUP_ID,
//   brokers: [config.KAFKA_BROKER_ADDRESS],
//   onNewMessage,
// });

// run cron jobs
runCronJobs();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1", apiRoutes);

app.listen(config.PORT, () => {
  console.log(`[${config.SERVICE}] running at PORT: ${config.PORT}`);
});