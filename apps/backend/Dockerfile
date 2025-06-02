# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy workspace configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy packages directory
COPY packages/ ./packages/

# Copy the backend app
COPY apps/backend/ ./apps/backend/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies using pnpm from root
RUN pnpm install

# Clean up to save space
RUN pnpm store prune

# Set working directory to backend app
WORKDIR /app/apps/backend

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["node", "src/index.js"] 