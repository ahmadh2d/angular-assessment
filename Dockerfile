# Use Node.js 22 as the base image
FROM node:22

# Set working directory
WORKDIR /workspace

# Install system Chromium directly
RUN apt-get update && apt-get install -y \
  chromium \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Set Chromium binary path explicitly
ENV CHROME_BIN=/usr/bin/chromium

# Install Angular CLI globally
RUN npm install -g @angular/cli@19

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the default Angular development server port
EXPOSE 4200

# Default command
CMD ["npm", "start", "--", "--host", "0.0.0.0"]