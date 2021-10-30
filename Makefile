include docker.env
export $(shell sed 's/=.*//' docker.env)

export PROJECT_NAME := $(or $(PROJECT_NAME), learn_docker_nest)
export POSTGRES_PORT := $(or $(POSTGRES_PORT), 5432)
export POSTGRES_HOST := $(or $(POSTGRES_HOST),  db)
export POSTGRES_DATABASE := $(or $(POSTGRES_DATABASE),  test_db)
export POSTGRES_USER := $(or $(POSTGRES_USER),  test_db)
export POSTGRES_PASSWORD := $(or $(POSTGRES_PASSWORD),  rootroot)

local:
	@echo "+\n++ Make: Run/Build locally ...\n+"
	@docker-compose up --build

run-local:
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up


run-local-db:
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up db

run-local-server:
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up api

close-local:
	@docker-compose down

run-local-client:
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up client

run-local-db:
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up db

run-local-api:
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up api

make local-server-workspace:
	@docker exec -it $(PROJECT_NAME)-api sh

make local-db-workspace:
	@docker exec -it $(PROJECT_NAME)-db sh