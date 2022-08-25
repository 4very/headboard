import fs from 'fs';
import { parse } from 'yaml';

const configFolder = './assets/config';
export default defineEventHandler((event) => {
  const query = useQuery(event);
  const file = `${configFolder}/${query.file}.yaml`;

  if (!fs.existsSync(file)) { return { success: false, path: file }; }
  const data = fs.readFileSync(file);
  return { data: parse(data.toString()), success: true, path: file };
});
