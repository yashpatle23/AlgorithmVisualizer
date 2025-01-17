//  @type {import('next').NextConfig}
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './build', // Changes the build output directory to `./dist`.
    assetPrefix: '/AlgorithmVisualizer',
    basePath: '/AlgorithmVisualizer',
}
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
