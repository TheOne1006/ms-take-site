import { loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// import path from 'path';

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return {
    plugins: [reactRefresh()],
    resolve: {
      alias: [
        // {
        //     find: /^react-admin$/,
        //     replacement: path.resolve(
        //         __dirname,
        //         '../../packages/react-admin/src'
        //     ),
        // },
        // {
        //     find: /^ra-(.*)$/,
        //     replacement: path.resolve(__dirname, '../../packages/ra-$1/src'),
        // },
        {
          find: /^@material-ui\/icons\/(.*)/,
          replacement: '@material-ui/icons/esm/$1',
        },
        {
          find: /^@material-ui\/core\/(.+)/,
          replacement: '@material-ui/core/es/$1',
        },
        {
          find: /^@material-ui\/core$/,
          replacement: '@material-ui/core/es',
        },
      ],
    },
    server: {
      port: 8080,
      proxy: {
        // string shorthand
        //   "/api": "https://sms-api.theone.io",
        '/api': 'http://localhost:3000',
      },
    },
  };};
