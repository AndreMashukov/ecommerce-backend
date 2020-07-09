#!/bin/bash
echo "Pull and start docker images"
export AWS_ACCOUNT_ID=664947791947
export AWS_DEFAULT_REGION=eu-central-1
cd ~
docker pull andreymashukov/ecommerce-backend
docker run -p 3001:3001 andreymashukov/ecommerce-backend