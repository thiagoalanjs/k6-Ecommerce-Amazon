# k6-Ecommerce-Amazon

Esse repositório tem como objetivo exemplificar um teste de carga com k6 no ecommerce da Amazon

![image](https://github.com/user-attachments/assets/05451ba2-6bbd-4b3a-a564-36e7d87cc3fe)


## Instalação do K6

Seguir a documentação https://k6.io/docs/get-started/installation/

## Instalação do Grafana

Seguir a documentação https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/

## Instalação do HAR

$ npm install -g har-to-k6

## Executando os testes gerando gráfico no grafana:

$ k6 run -o influxdb=http://localhost:8086/amazon_test nome_script.js 

![image](https://github.com/user-attachments/assets/f153bdb4-3d4b-45c3-910f-150b8a148e17)



## Resultado

![image](https://github.com/user-attachments/assets/bf06170c-be6c-478c-a56a-912537208e7b)



