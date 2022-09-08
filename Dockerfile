FROM node:16-alpine3.12 as BUILD_IMAGE
WORKDIR /react-canvas
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:16-alpine3.12
WORKDIR /react-canvas

COPY --from=BUILD_IMAGE /react-canvas/package.json ./package.json
COPY --from=BUILD_IMAGE /react-canvas/node_modules ./node_modules
COPY --from=BUILD_IMAGE /react-canvas/build ./build
COPY --from=BUILD_IMAGE /react-canvas/public ./public
COPY --from=BUILD_IMAGE /react-canvas/server ./server

EXPOSE 3000
CMD ["yarn", "start"]
