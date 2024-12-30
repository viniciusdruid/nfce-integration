## Instalação

1. Clone o repositório.
2. Instale dependências: `npm install`.
3. Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente necessárias.
4. Rode o docker-compose up para subir o banco de dados
5. Rode `npx prisma generate`
6. Inicie o servidor: `npm start:dev`.

## Uso

### POST /nfce/generate

Cria novo Cupom

```
curl --request POST \
  --url http://localhost:3000/nfce/generate \
  --header 'Authorization: Bearer [TOKEN_BUBBE]' \
  --header 'Content-Type: application/json' \
  --data '{}
```
