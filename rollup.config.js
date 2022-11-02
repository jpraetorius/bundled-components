import { nodeResolve } from '@rollup/plugin-node-resolve';

import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

const config = [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/rollup/bundle.js',
            format: 'esm',
            plugins: [
                terser()
            ]
        },
        plugins: [
            nodeResolve(),
        ]
    },
    {
        input: 'src/index.css',
        output: {
            file: 'dist/rollup/bundle.css',
            format: 'es'
        },
        plugins: [
            postcss({
                modules: false,
                extract: true,
                minimize: true,
                plugins: [postcssImport()]
            })
        ]
    }
]

export default config;