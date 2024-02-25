/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            
            hostname: 'res.cloudinary.com',
           
          },
        ],
      },
      env: {
        EMAIL_KEY: 'cHNK4tHsIlg2wmRJH',
      },
};

export default nextConfig;
