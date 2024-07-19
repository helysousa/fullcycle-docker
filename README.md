# Desafios do curso de Docker da Full Cycle

## Desafio 1 - Full Cycle rocks! em GoLang

O objetivo desse desafio é criar uma imagem que, com base em um código Golang, escreva "Full Cycle rocks!". A imagem final deve ter menos que 2MB e ser publicada no Dockerhub.

A imagem foi criada em duas etapas, a primeira para compilar a aplicação com um binário [estaticamente linkado]([https://pages.github.com/](https://en.wikipedia.org/wiki/Static_build)), ou seja, que não dependa de nada além de si para ser executado.

Para alcançar esse objetivo, a linha de comando para chamar o Go precisa de algumas definições específicas:

1. Desabilitar a **CGO**, ou seja, a funcionalidade que permite que programas em Go chamem rotinas e estruturas de dados em C (**CGO_ENABLED=0**)
2. Definir o sistema operacional onde o aplicativo será executado (**GOOS=linux**)
3. Utilizar as **ldflags** (linker flags) para remover informações de debug por meio (**flag -w**) e remover a tabela de símbolos (**flag -s**)

Desta forma o código é compilado com o seguinte comando:

```
RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-w -s' -o fullcycle .
```
O nome do programa compilado é definido pelo parâmetro -o.

Para construir a imagem e o container, alcançando o objetivo do desafio, deve-se executar os comandos abaixo na pasta [go-challenge](https://github.com/helysousa/fullcycle-docker/tree/main/go-challenge):

```
docker build -t fullcycle-rocks .
docker run fullcycle-rocks
```

A pasta go-challenge possui o código deste desafio e a imagem pode ser executada pelo comando abaixo:

```
docker run irvision/fullcycle-rocks:latest
```

## Desafio 2 - Criar uma aplicação em NodeJS, que retorne:

```
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```
A aplicação deverá utilizar uma instância do Nginx funcionando como proxy reverso
