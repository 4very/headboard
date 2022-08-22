import fs from 'fs';
import { mainSwapFile } from './metadata.get';

export default defineEventHandler((event) => {
  const isMain = useQuery(event).isMain === 'true';
  isMain ? fs.closeSync(fs.openSync(mainSwapFile, 'w')) : fs.rmSync(mainSwapFile);
  return {};
});
