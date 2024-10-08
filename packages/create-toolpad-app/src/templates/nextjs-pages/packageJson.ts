import { PackageJsonTemplate } from '../../types';

const packageJson: PackageJsonTemplate = (appName, coreVersion) => ({
  name: appName,
  version: '0.1.0',
  scripts: {
    dev: 'next dev',
    build: 'next build',
    start: 'next start',
    lint: 'next lint',
  },
  dependencies: {
    react: '^18',
    'react-dom': '^18',
    next: '^14',
    '@toolpad/core': coreVersion ?? 'latest',
    '@mui/material': '^6',
    '@mui/material-nextjs': '^6',
    '@mui/icons-material': '^6',
    '@emotion/react': '^11',
    '@emotion/styled': '^11',
    '@emotion/cache': '^11',
    '@emotion/server': '^11',
  },
  devDependencies: {
    typescript: '^5',
    '@types/node': '^20',
    '@types/react': '^18',
    '@types/react-dom': '^18',
    eslint: '^8',
    'eslint-config-next': '^14',
  },
});

export default packageJson;
