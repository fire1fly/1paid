import path from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'js', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    favicon: path.resolve(__dirname, 'src', 'assets', 'images', 'favicon.png')
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3333;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
