import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import css from "rollup-plugin-import-css";
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { dts } from "rollup-plugin-dts";
const packageJson = require('./package.json');


module.exports = [
    {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm'
        },
    ],
    external: ['react', 'react-bootstrap'],
    plugins: [
        commonjs(),
        nodeResolve(),
        typescript({
            tsconfig: "./tsconfig.json"
        }),
        css({
            extract: 'index.css',
            modules: true,
            minify: true
        }),
        url(),
        svgr({
            icon: true
        }),
        terser()
    ]
},
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    }
]
