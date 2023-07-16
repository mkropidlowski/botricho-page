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
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        // Alias to tell resolve the Prisma Client properly
        alias: {
            "@prisma/client$": require.resolve("@prisma/client"),
        },
    },
};
