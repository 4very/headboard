import fs from 'fs';
import { mainSwapFile } from './metadata.get';

export default defineEventHandler(() => {
  return fs.existsSync(mainSwapFile);
});
