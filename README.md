# log-backend
node后端，接收日志请求

## 依赖

### elasticsearch
#### docker的方式
1. 安装docker
2. docker pull elasticsearch:7.8.1
3. docker run -d --name elasticsearch  -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.8.1

#### 本地安装的方式
1. 下载[elasticsearch](https://www.elastic.co/cn/downloads/elasticsearch)
2. Run bin/elasticsearch on Linux or macOS. Run bin\elasticsearch.bat on Windows

## 启动当前项目
* npm run install
* npm run dev

