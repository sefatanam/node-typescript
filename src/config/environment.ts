import dotenv from 'dotenv';
dotenv.config();
export const environment = {
    serverErrorMessage: 'Something went wrong or broken! Need to Fix it 👷. Please check the error logs.',
    PORT: process.env.PORT,
    JWT_TOKEN_KEY:"PAISADENOILESTARDE"
}