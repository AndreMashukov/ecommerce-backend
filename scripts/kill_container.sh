#!/bin/bash
echo "Stopping and removing the running container"
cd ~
docker stop -a
docker image rm -f -a
rm -fr env*