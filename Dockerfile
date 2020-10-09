FROM mhart/alpine-node:12

WORKDIR /opt/api

COPY . ./

RUN npm install

CMD npm run dev
