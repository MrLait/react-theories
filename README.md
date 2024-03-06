<!-- TOC -->

- [react-theories](#react-theories)
- [docker theories:](#docker-theories)
  - [Установка и запуск:](#установка-и-запуск)
  - [Что такое images and containers](#что-такое-images-and-containers)
  - [Docker hub на примере .Node.js](#docker-hub-на-примере-nodejs)
  - [Создание и просмотр images](#создание-и-просмотр-images)
  - [Dockerfile .dockerignore, config .env, makefile, VOLUME и основные команды](#dockerfile-dockerignore-config-env-makefile-volume-и-основные-команды)
    - [Что такое VOLUME?](#что-такое-volume)
  - [Как построить и запустить образ и подключиться который запущен в фоновом режиме?](#как-построить-и-запустить-образ-и-подключиться-который-запущен-в-фоновом-режиме)
    - [Команды, чтобы построить образ:](#команды-чтобы-построить-образ)
    - [Команды для запуска образа:](#команды-для-запуска-образа)
    - [Подключение к запущенному контейнеру в фоновом режиме:](#подключение-к-запущенному-контейнеру-в-фоновом-режиме)
    - [Остановка образа:](#остановка-образа)
  - [Как изменить image и на его основе создать новый? Dev режим](#как-изменить-image-и-на-его-основе-создать-новый-dev-режим)
  - [Deploy в DockerHub](#deploy-в-dockerhub)
  - [docker остальные команды:](#docker-остальные-команды)
- [Материалы:](#материалы)

<!-- /TOC -->

# react-theories
# docker theories:
## Установка и запуск: 
1. [Install Docker Desktop on Windows]([https://](https://docs.docker.com/desktop/install/windows-install/))
2. Restart PC
3. Fix errors: Docker Desktop for Windows: No hypervisor is present on this system 
   1. open power shell as admin: 
   ```
    bcdedit /set hypervisorlaunchtype auto 
   ```
   2. Open: turn windows features on or off(Включение или отключение компонентов windows)
   3. Check the box next to Hypervisor, if it is blocked then you need to enable it in the BIOS
   4. Install WSL extension for VS Code

## Что такое images and containers
Image и контейнер именно в этой связке запускается сам докер. По сути images это некоторые шаблоны, которые служат для того, чтобы из них создавались контейнеры. Они предназначены только для чтения, то есть их невозможно изменить. В докере существует целая цепочка наследование имиджей, которая запускать различные приложения в различных операционных систем. Важно понимать, что есть некоторый образ например это может быть образ .net или образ node.js, а дальше для того, чтобы запустить приложение мы от этого образа создаем контейнер, то есть читаем этот образ, на основе которого запускается контейнер, в котором происходят работа приложения или сервиса, то есть сами по себе контейнеры как сущность они просто запускаются на основе имиджа и все. Сами приложения запускаются именно в контейнерах.

## Docker hub на примере .Node.js
Docker hub - это что-то вроде такого github только в контексте докера. Тут лежат определенные репозитории откуда мы можем забирать уже заранее заготовленные образы. Например, для [node.js]([https://](https://hub.docker.com/_/node/)) здесь мы видим что это официальный image. Обратите внимание что в данном случае мы работаем именно с images это шаблоны для того чтобы мы запускали свои контейнеры где будет уже работать само приложение 

## Создание и просмотр images
1. В docker hub - копируем команду и запускаем
2. docker images - позволяет посмотреть images
3. docker run node - запускает контейнер на основе node image
4. docker ps - показывает запущенные контейнеры
5. docker ps -а - показывает все контейнеры
6. docker run -it node - входим в контейнер
7. docker rm 'containerId' - удалить контейнер по id
8. docker prune - удаляет все контейнеры

## Dockerfile .dockerignore, config .env, makefile, VOLUME и основные команды

Dockerfile - файл в котором описываем инструкции, чтобы создать на его основе image

1. FROM node - когда docker будет считывать эту строчку он сначала поищет этот image на локальном компе, если его нет, то скачает с docker hub
2. COPY - копирует файлы и папки проекта в image
3. COPY . - копирует все из корня проекта в image
4. WORKDIR /app - 
5. COPY . ./app - копирует все в указанный WORKDIR из корня проекта в image
6. COPY . . - означают взять из корневого каталога где лежит Dockerfile и положить в папку WORKDIR

Далее идут команды для работы приложения
1. RUN запускается когда собираем строим сам образ
2. RUN npm install - 
3. EXPOSE указываем порт(не обязательная команда) если не указан порт то берет из env приложения
4. EXPOSE 3000 - берем 3000-ый порт
5. CMD ["node", "app.js"] - запускается каждый раз, когда запускается образ
6. ENV PORT=4200 указываем локальную переменную
7. EXPOSE $PORT - берет порт из ENV переменной
   1. docker run -p localPort:dockerPort -e PORT=dockerPort image_id|name - задаем env порт но при запуске;
   2. Можно создать папку config с файлом .env и в нем определить PORT=4200
   3. docker run -p localPort:dockerPort --env-file ./config/.env image_id|name - для пункта 2

makefile - make install windows(нужно установить)
1. run: и саму команду;
2. make run - выполнит эту команду.
   
### Что такое VOLUME?
VOLUME добавляем папку которая будет общая для контейнеров. Но обязательно нужно именовать при запуске контейнера.
Используется для сохранения данных после остановки контейнера.
1. В Dockerfile нужно добавить VOLUME ["/app/data"] - и тогда в папке будут сохраняться файлы;
2. И запустить докер image с командой -v и с именем: и с путем указанным в Dockerfile:
   1. docker run -d -p 3000:3000 -v logs:/app/data --rm --name logsapp logsapp:volumes - добавили общий volume.

## Как построить и запустить образ и подключиться который запущен в фоновом режиме?
### Команды, чтобы построить образ:
1. docker build . - создаем образ на основе этого Dockerfile
2. docker build -t imageName .  - добавляем имя образу
3. docker build -t imageName:version .   - добавляем имя образу и версию(tag)

### Команды для запуска образа: 
1. docker run 'image_id'         - создаем и запускаем контейнер
2. docker start 'container_id'   - запускает созданный контейнер
3. docker run -p localPort:dockerPort image_id - создаем и запускаем контейнер, но мапим локальный пор и порт докера.
4. docker run -d -p localPort:dockerPort image_id  - тоже самое но в фоновом режиме для терминала.
5. docker run -d -p localPort:dockerPort --name containerName image_id - запускаем контейнер с определенным именем.
6. docker run -d -p localPort:dockerPort --name yourName --rm image_id - после остановки автоматически удаляется.
7. docker run -d -p localPort:dockerPort --env-file ./config/.env --name yourName --rm image_id - читаем локальную переменную
8. docker run -d -p 3000:3000 -v logs:/app/data --rm --name logsapp logsapp:volumes - добавили общий volume.

### Подключение к запущенному контейнеру в фоновом режиме:
1. docker attach container_id|containerName  - входим в терминал запущенного контейнера
2. docker logs container_id|containerName - посмотреть логи контейнера           

### Остановка образа:
1. docker stop                    - останавливаем контейнер

## Как изменить image и на его основе создать новый? Dev режим
1. Если внесли изменения в код то после этого нужно создать новый Image и запустить контейнер.
2. Для запуска в dev:
   1. создаем makefile со скриптом run-dev
   2. указываем volume с src файлами

## Deploy в DockerHub
1. заходим на DockerHub
2. docker login - логинимся
3. docker push repoName:tag - пушим в репозиторий созданный image в dockerHub
4. docker pull repoName:tag - вытаскиваем созданный image из dockerHub
5. docker run -d -p localPort:dockerPort --name yourName --rm repoName:tag - запускаем скаченный image

## docker остальные команды:
1. docker images  - показывает все images
2. docker ps -a                   - посмотреть текущие контейнеры
3. docker ps                      - показывает запущенные контейнеры
4. docker container prune         - удаляем все созданные контейнеры
5. docker image prune             - удаляем все созданные images
6. docker rmi image_id            - удаляем созданный image
7. docker tag oldName newName     - на основе стоарого image, создается новый но с другим именем  т.е переименовываем
8. docker volume ls   - посмотреть все volume
   
# Материалы:
1. Docker для Начинающих - Полный Курс - [клик](https://www.youtube.com/watch?v=n9uCgUzfeRQ&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD)
2. .Net Core MySQL Microservice - Entity Framework Core MySQL - [клик](https://www.youtube.com/watch?v=b1BSu0Wb2Rw&ab_channel=CodingDroplets)
3. .NET Docker Tutorial - SQL Server Docker [.NET Docker] - [клик](https://www.youtube.com/watch?v=hpLvXNASyTI&ab_channel=CodingDroplets)
4. Как запустить проект? ASP.NET Core + React + NGINX + Docker Compose - [клик](https://www.youtube.com/watch?v=PhF6PxDT8Mo&ab_channel=%D0%A0%D1%83%D1%81%D0%BB%D0%B0%D0%BD%D0%93%D0%B0%D0%BB%D0%B5%D0%B5%D0%B2)