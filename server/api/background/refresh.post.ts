
export default defineEventHandler(async () => {
  await $fetch('/api/background/populate', { method: 'POST', params: { isMain: 'true' } });
  await $fetch('/api/background/populate', { method: 'POST', params: { isMain: 'false' } });

  return {
  };
});
