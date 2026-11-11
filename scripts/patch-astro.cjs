const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'node_modules', 'astro', 'dist', 'internal', 'element-registry.js');

try {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('export default')) {
    content = content.replace(
      'export {\n  AstroElementRegistry\n};',
      'export {\n  AstroElementRegistry\n};\nexport default AstroElementRegistry;'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched astro/dist/internal/element-registry.js with default export');
  }
} catch (err) {
  console.warn('Could not patch element-registry.js:', err.message);
}

const fetchContentPath = path.join(__dirname, '..', 'node_modules', 'astro', 'dist', 'internal', 'fetch-content.js');

try {
  let fcContent = fs.readFileSync(fetchContentPath, 'utf8');
  if (!fcContent.includes('export default')) {
    fcContent = fcContent.replace(
      'export {\n  fetchContent\n};',
      'export {\n  fetchContent\n};\nexport default fetchContent;'
    );
    fs.writeFileSync(fetchContentPath, fcContent, 'utf8');
    console.log('Patched astro/dist/internal/fetch-content.js with default export');
  }
} catch (err) {
  console.warn('Could not patch fetch-content.js:', err.message);
}

const slotPath = path.join(__dirname, '..', 'node_modules', 'astro', 'dist', 'internal', '__astro_slot.js');

try {
  let slotContent = fs.readFileSync(slotPath, 'utf8');
  if (!slotContent.includes('export default')) {
    slotContent = slotContent.replace(
      'export {\n  __astro_slot,\n  __astro_slot_content\n};',
      'export {\n  __astro_slot,\n  __astro_slot_content\n};\nexport default __astro_slot;'
    );
    fs.writeFileSync(slotPath, slotContent, 'utf8');
    console.log('Patched astro/dist/internal/__astro_slot.js with default export');
  }
} catch (err) {
  console.warn('Could not patch __astro_slot.js:', err.message);
}
