import Sequelize from 'sequelize';

/*
  Database Connection Setup
  Creates a new Sequelize instance using credentials loaded from environment variables. 
  This initializes the connection to the MySQL database and will be used across the project.
  Make sure the following environment variables are set:
    - DB_NAME
    - DB_USER
    - DB_PASSWORD
    - DB_HOST
*/

const sequelize = new Sequelize(
    process.env.DB_NAME,      // Database name
    process.env.DB_USER,      // Database username
    process.env.DB_PASSWORD,  // Database password
    {
        host: process.env.DB_HOST, // Database host (localhost, etc.)
        dialect: 'mysql'           // Database type
    }
);

export default sequelize;
