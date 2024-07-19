# etapa de build da aplicação

FROM golang:1.22.5 AS builder
WORKDIR /app
RUN go mod init fullcycle
COPY ./src/fullcycle.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-w -s' -o fullcycle .

# criar imagem reduzida

FROM scratch
LABEL org.opencontainers.image.authors="hely.sousa@outlook.com"
COPY --from=builder /app/fullcycle /
ENTRYPOINT [ "/fullcycle" ]