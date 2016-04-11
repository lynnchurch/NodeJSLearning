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
