import { imageMeta } from '../populate.post';

export default defineEventHandler(async (event) => {
  const url = useQuery(event).val as string;
  const liked: {[index: string]: imageMeta} = await $fetch('/api/background/likes/all', { method: 'GET' }) as {[index: string]: imageMeta};

  if (url in liked) { return { exists: true }; }
  return { exists: false };
});
