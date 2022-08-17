import fs from 'fs';
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
  liked: boolean,
  id: string,
  base64: string
}

export default defineEventHandler(async (event) => {
  const isMain = useQuery(event).isMain === 'true';
  const metadata = await $fetch('/api/background/metadata', { params: { isMain: (isMain) ? 'true' : 'false' } });

  // query and select image
  const ancSelection = (await $fetch('https://www.gstatic.com/culturalinstitute/tabext/imax.json')) as imageMeta[];
  const selection = ancSelection[Math.floor(Math.random() * ancSelection.length)];

  // get and download image
  const response: Promise<Blob> = $fetch(`${selection.image}=s1200`, { retry: 5, responseType: 'blob' });
  const blob: ArrayBuffer = await (await response).arrayBuffer();
  const buffer = Buffer.from(blob);

  fs.writeFileSync(metadata.imagePath, buffer);

  selection.base64 = fs.readFileSync(metadata.imagePath, { encoding: 'base64' });
  selection.id = selection.link.replace('asset-viewer/', '');
  selection.link = `https://artsandculture.google.com/${selection.link.replace('asset-viewer/', 'asset/')}`;
  selection.attribution_link = `https://artsandculture.google.com/${selection.attribution_link.replace('collection/', 'partner/')}`;

  const status = await $fetch('/api/background/likes/status', { method: 'GET', responseType: 'json', params: { val: selection.id } }) as {exists: boolean};
  if (status.exists) {
    selection.liked = true;
  } else {
    selection.liked = false;
  }

  fs.writeFileSync(metadata.jsonPath, stringify(selection));

  return {};
});
