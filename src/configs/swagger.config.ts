import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nfce API')
  .setDescription('API Nfce with Bubbe')
  .setVersion('1.0')
  .setContact('Bubbe', 'https://bubbe.com.br', 'bubbe@outlook.com')
  .addBearerAuth()
  .addSecurityRequirements('bearer')
  // .addApiKey({ type: "apiKey", in: "header", name: "X-API-KEY" }, "X-API-KEY")
  .build();
