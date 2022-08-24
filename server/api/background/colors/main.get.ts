import { getAverageColor } from 'fast-average-color-node';
import { backupimg, mainimg } from '../metadata.get';

export default defineEventHandler(() => {
  return getAverageColor(backupimg);
});
