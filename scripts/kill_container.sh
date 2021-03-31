#!/bin/bash
echo "Removinng the running container"
cd ~
# sudo docker stop -a
# sudo docker stop $(sudo docker ps -aq)
# sudo docker image rm -f $(sudo docker images -a -q)

CONTAINER=sudo docker ps -aq
if [ $CONTAINER ]; then
   sudo docker stop $CONTAINER
   sudo docker image rm -f $(sudo docker images -a -q)
else
   echo "No running containers"
fi
