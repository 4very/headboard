import fs from 'fs';
import { imageMeta } from '../populate.post';
import { likedJson } from './all.get';
import { stringify } from '~~/compostables/utils';

export default defineEventHandler(async (event) => {
  const isMain = useQuery(event).isMain === 'true';
  const metadata = (await $fetch('/api/background/metadata', { params: { isMain: (!isMain) ? 'true' : 'false' } })).data as imageMeta;

  const liked: {[index: string]: imageMeta} = await $fetch('/api/background/likes/all', { method: 'GET', responseType: 'json' }) as {[index: string]: imageMeta};

  const status = await $fetch('/api/background/likes/status', { method: 'GET', responseType: 'json', params: { val: metadata.id } }) as {exists: boolean, location: number};

  if (!status.exists) { return 'Image not liked'; }
  delete liked[metadata.id];

  fs.writeFileSync(likedJson, stringify(liked));

  return 'Success';
});
