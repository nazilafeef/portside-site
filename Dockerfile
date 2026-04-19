# Use the official lightweight Node.js image
FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy local code to the container image
COPY . .

# Build the Next.js app
RUN npm run build

# Start the service
EXPOSE 8080
CMD ["npm", "start"]
