/** @type {import("next").NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/su",
        destination: "https://thesubath.com/bcss/",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/PGvCbNSVwE",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/bath-bcss",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/bathcompsci",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://facebook.com/bathcompsci/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
