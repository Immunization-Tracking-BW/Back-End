// Update with your config settings.

const localPG = {
  host: "localhose",
  database: "local",
  user: "localDB",
  password: "password"
};

const productionDBConnection = process.env.DATABASE_URL || localPG;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/immunizationTracker.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
  },

  production: {
    client: "pg",
    connection: {
      database: productionDBConnection
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
