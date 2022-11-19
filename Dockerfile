FROM node:16-alpine3.16
WORKDIR /app
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3001
CMD ["npm","run","dev"]