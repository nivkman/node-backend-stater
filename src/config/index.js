export default {
  DATABASEURL: process.env.DATABASEURL || "mongodb://mongodb:27017",
  PORT: process.env.PORT || 9090,
  SERVICE: process.env.SERVICE || "MyNewService",
  KAFKA_BROKER_ADDRESS: process.env.KAFKA_BROKER_ADDRESS || "redpanda:29092",
  GROUP_ID: process.env.GROUP_ID || "<group_id>",
  TOPIC: process.env.TOPIC || "lce.pipeline",
  GROUP_TYPE: process.env.GROUP_TYPE || "<group_type>",
};
