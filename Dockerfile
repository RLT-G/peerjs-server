# Базовый минимальный Node.js образ
FROM node:20-alpine

# Создаём рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем только продакшн-зависимости
RUN npm ci --omit=dev

# Копируем исходники
COPY . .

# Указываем порт, на котором слушает сервер
EXPOSE 3003

# Запускаем приложение
CMD ["node", "index.js"]

