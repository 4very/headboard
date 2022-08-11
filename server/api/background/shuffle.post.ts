import fs from 'fs';
import { backupdata, backupimg, maindata, mainimg } from './metadata.get';

export default defineEventHandler(async () => {
  fs.renameSync(backupimg, mainimg);
  fs.renameSync(backupdata, maindata);

  await $fetch('/api/background/populate', { method: 'POST' });
  return {
  };
});
