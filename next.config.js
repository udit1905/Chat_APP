/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1250756297,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "0ae1c5ddb8c20ef80a999d1c94597b87",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
