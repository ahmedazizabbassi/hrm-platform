# Build stage
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy workspace configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy packages directory
COPY packages/ ./packages/

# Copy the frontend app
COPY apps/frontend/ ./apps/frontend/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies using pnpm from root
RUN pnpm install

# Clean up to save space
RUN pnpm store prune

# Set working directory to frontend app
WORKDIR /app/apps/frontend

# Build the application
RUN pnpm run build

# Nginx stage
FROM nginx:alpine

# Copy the built files from the build stage
COPY --from=build /app/apps/frontend/.next /usr/share/nginx/html/.next
COPY --from=build /app/apps/frontend/public /usr/share/nginx/html/public

# Copy the custom Nginx configuration
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 