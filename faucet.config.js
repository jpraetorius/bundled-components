module.exports = {
    js: [{
        source: "./src/index.js",
        target: "./dist/faucet/bundle.js",
        format: "esm",
        compact: "mangle"
    }],
    css: [{
        source: "./src/index.css",
        target: "./dist/faucet/bundle.css"
    }],
    plugins: [
        require("faucet-pipeline-css")
    ]
};