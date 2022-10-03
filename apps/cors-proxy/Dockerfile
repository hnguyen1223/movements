FROM node:18-slim
WORKDIR /app
COPY ./dist/apps/cors-proxy .
ENV PORT=8080
EXPOSE ${PORT}
RUN npm install --production
CMD [ "node", "index.js" ]