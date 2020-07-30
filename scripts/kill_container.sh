#!/bin/bash
echo "Stopping and removing the running container"
cd ~
# sudo docker stop -a
sudo docker stop $(sudo docker ps -aq)
sudo docker image rm -f $(sudo docker images -a -q)
