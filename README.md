# NodeJSLearning
Some practice about Node.js.

# Installation
## Ubuntu: 
```
sudo apt-get update  
sudo apt-get install -y python-software-properties software-properties-common  
sudo add-apt-repository ppa:chris-lea/node.js  
sudo apt-get update  
sudo apt-get install nodejs 
```
## Centos:
* epel  

```
yum install epel-release
```
* nodejs
```
yum install nodejs
```

# Upgrade
* Ubuntu: 
```
node -v  
sudo npm cache clean -f  
sudo npm install -g n  
sudo n stable  
node -v  (If the version information is incorrect,you shoud restart the machine.)
```

# Other Tools

## MySQL
* Ubuntu:  
```
sudo apt-get install mysql-server mysql-client
```
* Centos: 
```
yum -y install mariadb*  
systemctl start mariadb.service  
systemctl enable mariadb.service
```

## Mongodb
* Ubuntu:
```
sudo apt-get install mongodb
```
* Centos: 
```
yum install mongodb-server  
yum install mongodb
```

## Redis
* Ubuntu:  
```
wget http://download.redis.io/releases/redis-stable.tar.gz  
tar xvfz redis-stable.tar.gz  
cd redis-stable  
sudo make
sudo make install
sudo make test  
```
* Centos: 
```
 yum install redis
```

## Sublime Text
1. Access www.sublimetext.com and download it.  
2. sudo dpkg -i filename.deb

## SSH
```
sudo apt-get install ssh
```
## npm
* Centos:
```
yum install npm
```

## cnpm
```
sudo npm config set strict-ssl false  
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## nodemon
```
sudo npm install -g nodemon
```

## pm2
```
sudo npm install -g pm2
```

## node-inspector
```
sudo npm install -g node-inspector
```
