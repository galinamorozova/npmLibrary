
FROM node:18.16.1-alpine

WORKDIR /storybook

RUN npm install -g npm@9.5.1

COPY ./tsconfig.json ./webpack.config.js ./package.json ./package-lock.json ./

RUN npm i

ENV GENERATE_SOURCEMAP=false

COPY ./public ./public
COPY ./.storybook ./.storybook
COPY ./src ./src

ENTRYPOINT [ "npm", "run", "storybook"]

EXPOSE 6006