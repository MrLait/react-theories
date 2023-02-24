run:
	docker run -d -p 80:4200 --env-file ./config/.env --rm --name logsapp logsapp:env
runWithVolumes:
	docker run -d -p 3000:3000 -v logs:/app/data --rm --name logsapp logsapp:volumes
run-dev:
	docker run -d -p 3000:3000 -v "E:\VS\GitHub\React\logs-app:/app" -v /app/node_modules -v logs:/app/data --rm --name logsapp logsapp:volumes
runTwo:
	docker build