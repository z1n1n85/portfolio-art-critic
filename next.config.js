module.exports = {
    output: "export",
    assetPrefix: "/",
    reactStrictMode: true,
    webpack: (cfg) => {
    cfg.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
    });
    return cfg;
    },
};
