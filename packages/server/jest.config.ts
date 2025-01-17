import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  roots: ['<rootDir>'],
  testRegex: '.spec.ts$',
  modulePaths: ['./src'],
  moduleNameMapper: pathsToModuleNameMapper({
    '@/*': ['src/*'],
    '@utils/*': ['utils/*'],
    '@errors/*': ['errors/*'],
    '@db/*': ['database/*'],
    '@middlewares/*': ['api/middlewares/*'],
    '@pTypes/*': ['types/*'],
    '@api/*': ['api/*'],
  }),
  globalSetup: '<rootDir>/env/dotenv-test.ts',
};

export default config;
