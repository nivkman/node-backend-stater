import cron from "node-cron";

class CronJobs {
  async runCronJobs() {
    // await this.runEveryHourJob();
    console.log("[cron-jobs] connected and running successfully");
  }

  // Schedule the cron job to run every hour
  async runEveryHourJob() {
    cron.schedule("0 * * * *", async () => {
    });
  }
}

const cronJobs = new CronJobs();
export const runCronJobs = () => cronJobs.runCronJobs();
