
import dotenv from 'dotenv';
dotenv.config();
export default function () {

    if (process.env.NODE_ENV === 'production') {
        return {
            connectionString       : process.env.PROD_CONNECTION_STRING        ,
            databaseName           : process.env.DATABASE_NAME                 ,
            winstonConnectionString: process.env.PROD_WINSTON_CONNECTION_STRING,
            port                   : process.env.PORT
        };
    }

    return {
        connectionString       : process.env.DEV_CONNECTION_STRING        ,
        databaseName           : process.env.DATABASE_NAME                ,
        winstonConnectionString: process.env.DEV_WINSTON_CONNECTION_STRING,
        port                   : process.env.PORT
    }

}