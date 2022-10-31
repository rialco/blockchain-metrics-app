import nodeCron from 'node-cron';

const job = nodeCron.schedule('0 0 2 * * *', () => {});

job.start();
