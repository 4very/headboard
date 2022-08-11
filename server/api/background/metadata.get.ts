import fs from 'fs';

export const maindata = './assets/background/main.json';
export const backupdata = './assets/background/backup.json';
export const mainimg = './public/background/main.jpeg';
export const backupimg = './public/background/backup.jpeg';

export default defineEventHandler(() => {
  if (fs.existsSync(maindata) && fs.existsSync(backupdata)) {
    return {
      main: JSON.parse(fs.readFileSync(maindata).toString()),
      backup: JSON.parse(fs.readFileSync(maindata).toString())
    };
  } else {
    return {

    };
  }
});
