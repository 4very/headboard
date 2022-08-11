import fs from 'fs';
import { imageMeta } from '../populate.post';
import { maindata } from '../metadata.get';
import { likedJson } from './get.get';
import { stringify } from '~~/compostables/utils';

export default defineEventHandler(async (event) => {
  const body = await useBody(event) as imageMeta;
  const liked: imageMeta[] = await $fetch('/api/background/likes/get', { responseType: 'json' });

  const status = await $fetch('/api/background/likes/status', { body });

  if (status.exists) { return 'Image already liked'; }
  liked.push(body);

  fs.writeFileSync(likedJson, stringify(liked));

  body.liked = true;

  fs.writeFileSync(maindata, stringify(body));

  return 'Success';
});
