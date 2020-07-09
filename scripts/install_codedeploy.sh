#!/bin/bash
sudo yum install ruby
sudo yum install wget
cd /home/ec2-user
wget https://	aws-codedeploy-eu-central-1.s3.eu-central-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
# sudo service codedeploy-agent start
# sudo service codedeploy-agent status