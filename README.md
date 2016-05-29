# NodeJSLearning
Some practice about Node.js.

# Environment
Ubuntu

# Installation
>sudo apt-get update  
>sudo apt-get install -y python-software-properties software-properties-common  
>sudo add-apt-repository ppa:chris-lea/node.js  
>sudo apt-get update  
>sudo apt-get install nodejs  

# Upgrade
>node -v  
>sudo npm cache clean -f  
>sudo npm install -g n  
>sudo n stable  
>node -v  (If the version information is incorrect,you shoud restart the machine.)

# Other Tools

## MySQL
### Installation:
>sudo apt-get install mysql-server mysql-client

## Mongodb
### Installation:
>sudo apt-get install mongodb

## Redis
### Installation:
>wget http://download.redis.io/releases/redis-stable.tar.gz  
>tar xvfz redis-stable.tar.gz  
>cd redis-stable  
>sudo make
>sudo make install
>sudo make test

## Sublime Text
### Installatioin:
1. Access www.sublimetext.com and download it.  
2. sudo dpkg -i filename.deb

## SSH
### Installation:
>sudo apt-get install ssh

## cnpm
### Installation:
>sudo npm config set strict-ssl false  
>sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

## nodemon
### Installation:
>sudo npm install -g nodemon

## pm2
### Installation:
>sudo npm install -g pm2

## node-inspector
### Installation:
>sudo npm install -g node-inspector
