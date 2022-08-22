import fs from 'fs';
import { imageMeta } from './populate.post';

export const maindata = './assets/background/main.json';
export const backupdata = './assets/background/backup.json';
export const mainimg = './public/background/main.jpeg';
export const backupimg = './public/background/backup.jpeg';
export const mainSwapFile = './assets/background/backup';

export default defineEventHandler((event) => {
  const isMain = useQuery(event).isMain === 'true';

  const retval = {} as {imagePath: string, jsonPath: string, data: object};
  if (isMain) {
    retval.jsonPath = maindata;
    retval.imagePath = mainimg;
  } else {
    retval.jsonPath = backupdata;
    retval.imagePath = backupimg;
  }

  // console.log(fs.readFileSync(retval.imagePath, { encoding: 'base64url' }));
  // if (!(fs.existsSync(maindata) && fs.existsSync(backupdata) && fs.existsSync(mainimg) && fs.existsSync(backupimg))) {
  //   console.log('dne');
  //   await $fetch('/api/background/refresh', { method: 'post' });
  //   return retval;
  // }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(retval.jsonPath).toString()) as imageMeta;
  } catch {
    data = {};
  }
  return {
    ...retval,
    data
  };
});
