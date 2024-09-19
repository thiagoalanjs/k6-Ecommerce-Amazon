# k6-Ecommerce-Amazon

Esse repositório tem como objetivo exemplificar um teste de carga com k6 no ecommerce da Amazon

![image](https://github.com/user-attachments/assets/681c9d9b-4f74-419c-abfd-712498cc7ca3)

## Instalação do K6

Seguir a documentação https://k6.io/docs/get-started/installation/

## Instalação do Grafana

Seguir a documentação https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/

## Instalação do HAR

$ npm install -g har-to-k6

## Executando os testes gerando gráfico no grafana:

$ k6 run -o influxdb=http://localhost:8086/amazon_test nome_script.js 

![image](https://github.com/user-attachments/assets/440b129b-076f-478f-b932-04378ab19747)


## Resultado

![image](https://github.com/user-attachments/assets/587c2f8b-23f5-4996-b5db-e6e5ff911dfd)


