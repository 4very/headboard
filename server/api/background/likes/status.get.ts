import { imageMeta } from '../populate.post';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const liked: imageMeta[] = await $fetch('/api/background/likes/get');
  liked.forEach((like, val) => {
    if (body === like) {
      return { exists: true, location: val };
    }
  });
  return { exists: false, location: -1 };
});
