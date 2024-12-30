aws --profile=bubbe-prod cloudformation create-stack --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM CAPABILITY_NAMED_IAM ^
    --stack-name=bubbe-nfce-prod --template-body file://./template.yaml ^
    --parameters ParameterKey=Image,ParameterValue=038444195057.dkr.ecr.sa-east-1.amazonaws.com/bubbe/nfce:prod-2.0.1a ^
                 ParameterKey=FullServiceName,ParameterValue=nfce-prod ^
                 ParameterKey=ServiceName,ParameterValue=nfce-prod ^
                 ParameterKey=Subdomain,ParameterValue=nfce-prod ^
                 ParameterKey=MaxContainers,ParameterValue=3 ^
                 ParameterKey=Priority,ParameterValue=20 

