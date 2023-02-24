#WORKDIR создаем начальную папку
#. . означают взять из корневого каталога где лежит Dockerfile и пложить в папку WORKDIR
#RUN запускается когда строим сам образ
#CMD запускается каждый раз когда запускается сам образ
#ENV PORT=4200 указываем локальную переменную
#EXPOSE указываем порт

#docker build                       - создаем образ на основе этого файла
#docker build -t logsapp .          - добавляем имя образу
#docker build -t logsapp:version .  - добавляем имя образу и версию(tag)
#docker images  - показывает все images
#docker run 'image_id'                                  - создаем и запускаем контейнер
#docker run -p localPort:dockerPort image_id            - создаем и запускаем контейнер, но мапим локальный пор и порт докера.
#docker run -d -p localPort:dockerPort image_id         - тоже самое но в фоновом режиме для терминала.
#docker run -d -p localPort:dockerPort --name yourName image_id                                 - именуем контейнер
#docker run -d -p localPort:dockerPort --name yourName --rm image_id                            - после остановки автоматически удаляется контейнер
#docker run -d -p localPort:dockerPort --env-file ./config/.env --name yourName --rm image_id   - читаем локальную переменную
#docker start 'container_id'    - запускает созданный контейнер
#docker ps -a                   - посмотреть текущие контейнеры
#docker ps                      - показывает запущенные контейнеры
#docker container prune         - удаляем все созданные контейнеры
#docker image prune             - удаляем все созданные images
#docker rmi image_id            - удаляем созданный image
#docker attach container_id     - входим в терминал запщенного контейнера
#docker logs                
#docker tag oldName newName     - на основе стоарого image, создается новый но с другим именем  т.е переименовываем
#docker push repoName:tag       - пушим в репозиторий созданный image в dockerHub
#docker stop                    - останавливаем контейнер
FROM node

WORKDIR /app

#оптимизировали для того чтобы добавить кэширование. Теперь не измененные файлы берутся из кэша
COPY package.json /app
RUN npm install
COPY . .

ENV PORT=4200

EXPOSE $PORT

CMD [ "app.js" ]
