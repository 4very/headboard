
import page from "../types/page";
import { load } from "js-yaml";
import { readFile } from "fs/promises";

export default async function read_yaml(relpath: string): Promise<page> {

    const yml_data = load(await readFile('../../config/main.yaml', 'utf8')) as page

    return yml_data

}