import type { Configuration } from 'webpack';

module.exports = {
  entry: {
    background: { import: 'apps/extension/src/background.ts', runtime: false },
    content: { import: 'apps/extension/src/content.ts', runtime: false },
    popup: { import: 'apps/extension/src/popup.ts', runtime: false },
  },
} as Configuration;
