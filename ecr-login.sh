#!/bin/bash

$(aws ecr get-login-password --profile AWSBubbeHML --region sa-east-1 | docker login --username AWS --password-stdin [CONTA].dkr.ecr.sa-east-1.amazonaws.com)