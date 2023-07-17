export const publicEnvs = {
    LOCAL_URL: process.env.NEXT_LOCAL_URL,
    BASE_URL: process.env.NEXT_BASE_URL,
};

export const isDevServer = process.env.NODE_ENV === "development";
