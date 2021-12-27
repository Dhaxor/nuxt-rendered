module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47ac7ca07a7a7214a7c2bbccba977a94'),
  },
});
