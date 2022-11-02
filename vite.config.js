/** @type {import('vite').UserConfig} */
export default {
    build: {
        lib: {
            entry: ['src/index.js', 'src/index.css'],
            formats: ['es'],
            fileName: 'vite/bundle'
        }
    }
}