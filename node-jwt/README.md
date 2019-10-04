JTW
====

JSON Web Token
Padrão RFC-7519, que define como transferir e armazenar objetos JSON de forma compacta e segura entre diferentes aplicações.
Os dados podem ser validados a qualquer momento pois o token é assinado digitalmente.
É formado por três seções: HEADER, PAYLOAD, SIGNATURE.

Por segurança, recomenda-se não armazenar informações confidenciais ou sensíveis no token

### HEADER
Comtém:
Objeto JSON que define informações sobre o tipo do token(typ)
O Algorítimo de criptografia usado em sua assinatura (alg) (normalmente HMAC SHA256 ou RSA)

{
    "alg" : "HS256",
    "typ" : "JWT"
}

### PAYLOAD
Objeto JSON com as Claims (informações) da entidade tratada (Ex. o usuário autenticado).
O algorítimo de criptografia usado em sua assinatura (alg) (normalmente HMAC SHA256 ou RSA)
Pode ser de 3 tipos: Reserved claims, Public claims e Private claims.

## Reserved claims
Atributos não obrigatórios (mas recomendados) que são usados na validação do token pelos protocolos de segurança das APIs:
- sub (subject)*: Entidade à quem o tokem pertence (Ex. ID do usuário)
- iss (issuer)*: Emissor do token
- exp (expiration)*: Timestamp de expiração do token
- iat (issued at): Timestamp de criação do token
- aud (audience): Destinatário do token (a aplicação que irá usá-lo)

* Atributos mais utilizados


## Public claims
Atributos usados pelas aplicações (ex. usuário autenticado)
- name
- roles
- permissions

## Private claims
Atributos definidos especialmente para compartilhar informações entre aplicações
{
    "sub" : "1234567890",
    "name" : "John Doe",
    "admin": true
}


### SIGNATURE
A concatenação dos hashes gerados a partir do Header e Payload usando base64UrlEncode, com uma chave secreta ou certificado RSA.

Garante a integridade do token, se ele foi modificado e se realmente foi gerado para você.

Previne ataques do tipo man-in-the-middle: o invasor poderia interceptar a requisição e modificar seu conteúdo.


### Como o token é utilizado ?

- O usuário faz login em um serviço de autenticação e um token JTW é criado e retornado para o client.
- O token é enviado para as APIs através do header Authorization de cada requisição HTTP, com a flag Bearer.
Authorization: Bearer <token>
- Com o token, a API não precisa consultar as informações do usuário no banco de dados.

![Comunicação token](https://i.stack.imgur.com/cXxYn.png "token")


# node-jwt
Exemplo de API em Node.js usando JWT

## Instalar dependências
```
    npm install
```

## Gerando certificados

O algorítmo de encriptação do token usa o conteúdo de arquivos de certificados que contém as chaves pública e privada. Para gerar estes arquivos, execute o arquivo:

```
$ ./generateKeys.sh
```
A senha solicitada pelo comando pode ficar em branco. Os arquivos **_private.key_** e **_public.key_** serão gerados na pasta **_src_**.

## Iniciar o servidor
Para iniciar o servidor Express, use o comando:

```
   npm start
```


## Referências
[Documentação do Express](https://expressjs.com)

[Documentação do JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

## Observações
Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).
