module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        unoptimized: true,
    },
    async redirect() {
        return [
            {
                source: "/",
                destination: "/panel",
                pernament: true,
            },
        ];
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
