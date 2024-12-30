#!/bin/bash
docker build -t bubbe/nfce .
docker tag bubbe/nfce:latest [CONTA].dkr.ecr.us-east-1.amazonaws.com/bubbe/nfce:latest
docker push [CONTA].dkr.ecr.us-east-1.amazonaws.com/bubbe/nfce:latest