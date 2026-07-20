import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

export function readJson<T>(file: string, fallback: T): T {
  const full = path.join(dataDir, file);
  if (!fs.existsSync(full)) return fallback;
  return JSON.parse(fs.readFileSync(full, 'utf-8')) as T;
}

export function writeJson<T>(file: string, data: T) {
  const full = path.join(dataDir, file);
  fs.writeFileSync(full, JSON.stringify(data, null, 2));
}

export function makeRef(prefix: string) {
  return `${prefix}-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
