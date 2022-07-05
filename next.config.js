/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: {
			remotePatterns: [
				{
					protocol: "https",
					hostname: "**.com",
				},
			],
		},
	},
};

module.exports = nextConfig;
