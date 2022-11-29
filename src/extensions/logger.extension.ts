import winston from 'winston';

export default function () {

    process.on('uncaughtException', (exception: Error) => {
        winston.error(exception.message.concat(new Date().toLocaleDateString()));
    })

    process.on('unhandledRejection', (exception: Error) => {
        winston.error(exception.message.concat(new Date().toLocaleDateString()));
    })
    winston.add(new winston.transports.File({ filename: 'logs/logfile.log' }))
    // winston.add(new winston.transports.MongoDB({ db: environment.winstonConnectionString }))

}