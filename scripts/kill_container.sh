#!/bin/bash
echo "Removinng the running container"
cd ~
# sudo docker stop -a
# sudo docker stop $(sudo docker ps -aq)
# sudo docker image rm -f $(sudo docker images -a -q)

if [ "$(sudo docker ps -aq)" ]; then
  sudo docker stop $(sudo docker ps -aq)
fi

if [ "$(sudo docker images -a -q)" ]; then
  sudo docker image rm -f $(sudo docker images -a -q)
fi
