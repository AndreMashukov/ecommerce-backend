#!/bin/bash
echo "Pull and start docker images"
# export AWS_ACCOUNT_ID=664947791947
# export AWS_DEFAULT_REGION=eu-central-1
cd ~
# aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 664947791947.dkr.ecr.eu-central-1.amazonaws.com
# docker pull andreymashukov/ecommerce-backend
# docker pull 664947791947.dkr.ecr.eu-central-1.amazonaws.com/ecommerce-backend:latest 
# rm -fr env.production*
# wget 
chmod +755 env.production
# docker run --env-file ./env.production -d -it -p 3001:3001 664947791947.dkr.ecr.eu-central-1.amazonaws.com/ecommerce-backend:latest
sudo docker run --env-file ~/env.production -d -it -p 3001:3001 docker.io/andreymashukov/ecommerce-backend:latest
# sudo docker run --env-file .env.production -d -it -p 3001:3001 andreymashukov/ecommerce-backend:latest
# docker exec -it name sh
# ps -ef
