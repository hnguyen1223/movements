import type { Configuration } from 'webpack';

module.exports = {
  entry: {
    background: {
      import: 'apps/extension/src/scripts/background.ts',
      runtime: false,
    },
    content: {
      import: 'apps/extension/src/scripts/content.ts',
      runtime: false,
    },
    mappingCreator: {
      import: 'apps/extension/src/scripts/mappingCreator.ts',
      runtime: false,
    },
    popup: {
      import: 'apps/extension/src/pages/popup/popup.ts',
      runtime: false,
    },
  },
} as Configuration;
