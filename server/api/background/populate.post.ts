import fs from 'fs';
import { backupdata, backupimg } from './metadata.get';
import { stringify } from '~~/compostables/utils';

export interface imageMeta {
  image: string,
  creator: string,
  artist_link: string,
  link: string,
  attribution_link: string,
  title: string,
  source: string,
  attribution: string,
  liked: boolean
}

export default defineEventHandler(async () => {
  const ancSelection = (await $fetch('https://www.gstatic.com/culturalinstitute/tabext/imax.json')) as imageMeta[];
  const selection = ancSelection[Math.floor(Math.random() * ancSelection.length)];

  selection.link = `https://artsandculture.google.com/${selection.link.replace('asset-viewer/', 'asset/')}`;
  selection.attribution_link = `https://artsandculture.google.com/${selection.attribution_link.replace('collection/', 'partner/')}`;

  const liked = new Map(await $fetch('/api/background/getLiked', { responseType: 'json' }));
  if (liked.has(selection.image)) {
    selection.liked = true;
  } else {
    selection.liked = false;
  }

  fs.writeFileSync(backupdata, stringify(selection));

  const response: Promise<Blob> = $fetch(`${selection.image}=s1200`, { retry: 5, responseType: 'blob' });
  const blob: ArrayBuffer = await (await response).arrayBuffer();
  const buffer = Buffer.from(blob);

  fs.writeFileSync(backupimg, buffer);

  return {};
});
