# Use Node.js as the build image
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install 

# Copy source files and build
COPY . .
RUN npm run build

# Use nginx for serving the frontend
FROM nginx:alpine

# Copy built frontend files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
