import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

function getMemberContent(fileName) {
  const fullPath = join(process.cwd(), `${fileName}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

export default getMemberContent;
