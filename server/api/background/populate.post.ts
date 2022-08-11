import fs from 'fs';
import { backupdata, backupimg } from './metadata.get';
export default defineEventHandler(async () => {
  const ancSelection = (await $fetch('https://www.gstatic.com/culturalinstitute/tabext/imax.json')) as {image: string}[];
  const selection = ancSelection[Math.floor(Math.random() * ancSelection.length)];
  fs.writeFileSync(backupdata, JSON.stringify(selection, null, '\t'));

  const response: Promise<Blob> = $fetch(`${selection.image}=s1200`, { retry: 5, responseType: 'blob' });
  const blob: ArrayBuffer = await (await response).arrayBuffer();
  const buffer = Buffer.from(blob);

  fs.writeFileSync(backupimg, buffer);

  return {};
});
