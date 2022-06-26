// rollup.config.js
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const config = defineConfig([
  // types config
  {
    input: ['src/index.ts'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      typescript({ declarationDir: 'dist/types', sourceMap: false }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"]

  },
  // ESM config
  {
    input: ['src/index.ts'],
    output: {
      dir: 'dist/esm',
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
    },
    plugins: [
      typescript({ outDir: 'dist/esm', declaration: false, sourceMap: false }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"]
  },
]);

export default config;