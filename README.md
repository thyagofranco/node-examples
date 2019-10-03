NODEJS
======

- Criado em 2009 por Ryan Dahl
- Combina a máquina virtual Javascript v8, Event loop e a libuv
- Usa o javascript como linguagem de programação
- É guiado a eventos (Event Driven)

### Caracteristicas
- Event Loop
- Assincronicidade
- Process de I/O não bloqueante
- Alta performance (quando bem estruturado)

## Event Loop
É um processo single thread que escuta, aguarda eventos que serão processados em background e somente quando completos, serão respondidos ao cliente.

![Event Loop](/assets/images/eventLoop.png)

![Event Loop Detail](/assets/images/eventLoopDetail.png)




Express
=======

Framework web minimalista, pouco opnativo e rápido para Node.js
Fornece uma estrutura e conjunto de recursos robustos para aplicações Web e mobile. Dispõe de métodos utilitários HTTP e middlewares para criar uma API rápida e segura.
Utiliza middlewares para fornecer acesso ao pipiline de request/response



Hapi
====
Um framework para construir aplicações e serviços, criado por Hammer, arquiteto de plataforma móvel Walmart.
Cria a arquitetura da aplicação, diferente do express que deixa isso para o desenvolvedor, mais opinativo que o Express que é minimalista.
Tem uma camada de abstração acima do Node. 
Usa plugins para extender suas funcionalidades. Existe geralmente um plugin em Hapi para cada middleware no Express.


Funcionalidades
-----------------

## Authentication e Authorization 
Esquemas e estratégias de autenticação e autorização. 

## Armazenamento em cache
Cache do lado do cliente e do servidor (catbox)

## Roteamento
Permite confirgurar como o aplicativo da Web ou rotas da API devem ser exibidas

## Validação (Joi)
Validação de schema de objetos 

## Cookies
Opção de configuração para fazer uso de cooks.

## Logging 
Métodos nativos para geração de logs

## Tratamento de Erros (Boom)
Conjunto de utilitários para retornar objetos de erro compatíveis com HTTP

## Monitoramento de Processos (Good)
Monitor e reportar uma variaedade de eventos




