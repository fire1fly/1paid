import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export default function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      "@Images": path.join(options.paths.src, 'assets', 'images'),
      "@Fonts": path.join(options.paths.src, 'assets', 'fonts')
    },
  };
}
