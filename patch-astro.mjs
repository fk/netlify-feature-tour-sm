import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = resolve(__dirname, 'node_modules/astro/dist/internal/element-registry.js');

try {
  let content = readFileSync(filePath, 'utf8');
  if (!content.includes('export default')) {
    content = content.replace(
      'export {\n  AstroElementRegistry\n};',
      'export {\n  AstroElementRegistry\n};\nexport default AstroElementRegistry;'
    );
    writeFileSync(filePath, content, 'utf8');
  }
} catch (e) {
  // Silently skip if file not found (e.g., during initial install)
}
