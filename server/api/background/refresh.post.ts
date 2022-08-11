
export default defineEventHandler(async () => {
  await $fetch('/api/background/populate', { method: 'POST' });
  await $fetch('/api/background/shuffle', { method: 'POST' });

  return {
  };
});
