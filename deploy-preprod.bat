aws --profile=bubbe-prod cloudformation update-stack --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM CAPABILITY_NAMED_IAM ^
    --stack-name=bubbe-nfce-preprod --template-body file://./template.yaml ^
    --parameters ParameterKey=Image,ParameterValue=038444195057.dkr.ecr.sa-east-1.amazonaws.com/bubbe/nfce:preprod-2.0.1a ^
                 ParameterKey=FullServiceName,ParameterValue=nfce-preprod ^
                 ParameterKey=ServiceName,ParameterValue=nfce-preprod ^
                 ParameterKey=Subdomain,ParameterValue=nfce-preprod 

