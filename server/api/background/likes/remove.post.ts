import fs from 'fs';
import { imageMeta } from '../populate.post';
import { maindata } from '../metadata.get';
import { likedJson } from './get.get';
import { stringify } from '~~/compostables/utils';

export default defineEventHandler(async (event) => {
  const body = await useBody(event) as imageMeta;
  const liked: imageMeta[] = await $fetch('/api/background/likes/get', { responseType: 'json' });

  const status = await $fetch('/api/background/likes/status', { body });

  if (!status.exists) { return 'Image not liked'; }
  liked.splice(status.location, 1);

  fs.writeFileSync(likedJson, stringify(liked));

  body.liked = false;

  fs.writeFileSync(maindata, stringify(body));

  return 'Success';
});
