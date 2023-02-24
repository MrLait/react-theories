#WORKDIR создаем начальную папку
#. . означают взять из корневого каталога где лежит Dockerfile и пложить в папку WORKDIR
#RUN запускается когда строим сам образ
#CMD запускается каждый раз когда запускается сам образ
#EXPOSE указываем порт

#docker build   - создаем образ на основе этого файла
#docker images  - показывает все images
#docker run 'image_id'                          - создаем и запускаем контейнер
#docker run -p localPort:dockerPort image_id    - создаем и запускаем контейнер, но мапим локальный пор и порт докера.
#docker run -d -p localPort:dockerPort image_id - тоже самое но в фоновом режиме для терминала.
#docker start 'container_id'    - запускает созданный контейнер
#docker ps -a                   - посмотреть текущие контейнеры
#docker ps                      - показывает запущенные контейнеры
#docker container prune         - удаляем все созданные контейнеры
FROM node

WORKDIR /app

#оптимизировали для того чтобы добавить кэширование. Теперь не измененные файлы берутся из кэша
COPY package.json /app
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "app.js" ]
