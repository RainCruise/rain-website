FROM node:8-slim

RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak && \
  echo "deb http://mirrors.163.com/debian/ stretch main non-free contrib" >/etc/apt/sources.list && \
  echo "deb http://mirrors.163.com/debian/ stretch-updates main non-free contrib" >>/etc/apt/sources.list && \
  echo "deb http://mirrors.163.com/debian/ stretch-backports main non-free contrib" >>/etc/apt/sources.list && \
  echo "deb-src http://mirrors.163.com/debian/ stretch main non-free contrib" >>/etc/apt/sources.list && \
  echo "deb-src http://mirrors.163.com/debian/ stretch-updates main non-free contrib" >>/etc/apt/sources.list && \
  echo "deb-src http://mirrors.163.com/debian/ stretch-backports main non-free contrib" >>/etc/apt/sources.list && \
  echo "deb http://mirrors.163.com/debian-security/ stretch/updates main non-free contrib" >>/etc/apt/sources.list && \
  echo "deb-src http://mirrors.163.com/debian-security/ stretch/updates main non-free contrib" >>/etc/apt/sources.list

RUN apt-get update  && apt-get install -y nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /rain-website

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# 暴露容器运行时的监听端口给外部，要通过宿主机ip+端口的方式访问服务，宿主机的端口必须与容器端口有映射关系； 例如 -p 8000:80
EXPOSE 80

RUN cp -r dist/* /usr/share/nginx/html && rm /etc/nginx/sites-enabled/default

CMD ["nginx","-g","daemon off;"]