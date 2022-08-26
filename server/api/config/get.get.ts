import fs from 'fs';
import { parse } from 'yaml';
import Page from '~~/types/page';

const configFolder = './assets/config';
export default defineEventHandler((event) => {
  const query = useQuery(event);
  const file = `${configFolder}/${query.file}.yaml`;

  if (!fs.existsSync(file)) { return { success: false, path: file }; }
  const data = fs.readFileSync(file);
  return { data: parse(data.toString()) as Page, success: true, path: file };
});
