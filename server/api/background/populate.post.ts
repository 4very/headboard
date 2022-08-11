import fs from 'fs';
import { backupdata, backupimg } from './metadata.get';

interface imageMeta {
  image: string,
  creator: string,
  artist_link: string,
  link: string,
  attribution_link: string,
  title: string,
  source: string,
  attribution: string,
  liked: true
}

export default defineEventHandler(async () => {
  const ancSelection = (await $fetch('https://www.gstatic.com/culturalinstitute/tabext/imax.json')) as imageMeta[];
  const selection = ancSelection[Math.floor(Math.random() * ancSelection.length)];

  selection.link = `https://artsandculture.google.com/${selection.link.replace('asset-viewer/', 'asset/')}`;
  selection.attribution_link = `https://artsandculture.google.com/${selection.attribution_link.replace('collection/', 'partner/')}`;

  fs.writeFileSync(backupdata, JSON.stringify(selection, null, '\t'));

  const response: Promise<Blob> = $fetch(`${selection.image}=s1200`, { retry: 5, responseType: 'blob' });
  const blob: ArrayBuffer = await (await response).arrayBuffer();
  const buffer = Buffer.from(blob);

  fs.writeFileSync(backupimg, buffer);

  return {};
});
