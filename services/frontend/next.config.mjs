/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: `/proxy/api/${process.env.BACKEND_API_VERSION}/:path*`,
				destination: `http://localhost:${process.env.BACKEND_PORT}/${process.env.BACKEND_API_VERSION}/:path*`,
			},
		]
	},
}

export default nextConfig
