#!/bin/sh

echo "------------------ Start  Building ------------------"
docker build -t rain . && docker rm -f vfine && docker run -d --name=rain -p 6500:80 rain

echo "All Is Well !!!"
