#!/bin/bash
echo "Stopping and removing the running container"
cd ~
docker stop -a
docker image rm -a