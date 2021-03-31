#!/bin/bash
echo "Removinng the running container"
cd ~
# sudo docker stop -a
# sudo docker stop $(sudo docker ps -aq)
# sudo docker image rm -f $(sudo docker images -a -q)

CONTAINER=$(sudo docker ps -aq)
if [ $CONTAINER ]; then
   sudo docker stop $(sudo docker ps -aq)
else
   echo "No running containers"
fi

IMAGE=$(sudo docker images -a -q)
if [ $IMAGE ]; then
   sudo docker image rm -f $(sudo docker images -a -q)
else
   echo "No images"
fi
