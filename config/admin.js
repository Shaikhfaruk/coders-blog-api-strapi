module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '513d1a609b5139044d5ddc84e4d79e2b'),
  },
});
