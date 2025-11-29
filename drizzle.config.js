/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_NWRJvHm6FS1k@ep-misty-flower-a8lg2vhh-pooler.eastus2.azure.neon.tech/AI-MOCKER?sslmode=require&channel_binding=require',
    }
  };