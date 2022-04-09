module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0631d4cccdf81f46fe9de385d414a0e8'),
  },
});
