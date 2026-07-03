import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const manifestPath = path.join(root, '.grok-plugin', 'plugin.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function exists(relativePath, mode = constants.R_OK) {
  await access(path.join(root, relativePath), mode);
}

assert(manifest.name === 'hol-guard-grok-plugin', 'manifest name must be hol-guard-grok-plugin');
assert(manifest.license === 'Apache-2.0', 'license must be Apache-2.0');
assert(manifest.repository === 'https://github.com/hashgraph-online/hol-guard-grok-plugin', 'repository URL mismatch');
assert(manifest.skills === './skills/', 'skills path must be ./skills/');

await exists('skills/hol-guard/SKILL.md');
await exists('assets/logo.svg');
await exists('scripts/hol-guard-plugin');

const skill = await readFile(path.join(root, 'skills/hol-guard/SKILL.md'), 'utf8');
assert(skill.includes('Never read `.env` files.'), 'skill must include env safety rule');
assert(skill.includes('plugin-scanner verify'), 'skill must document plugin-scanner verify');
assert(skill.includes('hol-guard bootstrap'), 'skill must document hol-guard bootstrap');
assert(skill.includes('hol-guard install grok'), 'skill must document Grok protection');
assert(skill.includes('Grok Build'), 'skill must mention Grok Build');

const helper = await readFile(path.join(root, 'scripts/hol-guard-plugin'), 'utf8');
assert(helper.includes('normalize_harness'), 'helper must normalize harness aliases');
assert(helper.includes('grok|grok-build|grok_build'), 'helper must accept Grok aliases');

console.log('HOL Guard Grok Plugin validation passed.');
