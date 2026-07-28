FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Install 'serve' or just use nginx to serve static files.
# Since the user requested "no reverse proxy like Nginx" (implying they handle it at Cloudflare),
# we will use a simple static file server approach inside the container.
# We can use 'nginx' as a high-performance web server, or 'serve'.
# Let's go with 'nginx' because it's robust for production and is already standard in Docker images.

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
