// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
//     reactStrictMode: true,
//     images: {
//         unoptimized: true
//     }
// };
//
// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    basePath: "/app",
    reactStrictMode:true,
    images: {
        unoptimized: true
    }
};
/* module.exports = nextConfig*/
export default nextConfig;