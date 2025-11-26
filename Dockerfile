# FE

# --- Stage 1: Build Next.js ---
FROM node:24-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Stage 2: Run Production ---
FROM node:24-slim
WORKDIR /app

# COPY --from=builder /app ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 4060 3306

CMD ["npm", "start", "--", "-p", "4060"]
