/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  
  env: {
	  //backendBaseUrl: "https://daji.co.in/api/", // Replace with your backend base URL
	  //  backendBaseUrl: 'http://localhost:3000/', // Replace with your backend base URL
    backendBaseUrl: 'https://backend-development-eta.vercel.app/', // Replace with your backend base URL
     RazorPayKey: 'rzp_live_KWRVaosBcaZ1CI'
    //  RazorPayKey: 'rzp_test_mzRA5mxqlfedUz'
  },
  //sitemap configuration
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/_next/static/sitemap.xml'
      }
    ]
  },
};
module.exports = nextConfig;
