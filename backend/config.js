module.exports = {
    server: {
      port: process.env.PORT || 8080,
    },
    mongodb: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/mydatabase',
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'mysecretkey',
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },
  };
  