export default {
  PORT: parseInt(process.env["PORT"]!) || 8080,
  DB: {
    USERNAME: process.env["DB_USERNAME"] || "admin",
    PASSWORD: process.env["DB_PASSWORD"] || "admin",
    HOST: process.env["DB_HOST"] || "db",
    PORT: process.env["DB_PORT"] || "27017",
  },
};
