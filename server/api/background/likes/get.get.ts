import fs from 'fs';
import { imageMeta } from '../populate.post';
import { stringify } from '~~/compostables/utils';
export const likedJson = './public/background/liked.json';

export default defineEventHandler(() => {
  if (!fs.existsSync(likedJson)) {
    fs.writeFileSync(likedJson, stringify([]));
  }

  return JSON.parse(fs.readFileSync(likedJson).toString()) as imageMeta[];
});
