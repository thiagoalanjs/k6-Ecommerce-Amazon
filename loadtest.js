import http, { get } from 'k6/http';
import { sleep } from 'k6';
import { thresholds } from 'k6';
import { check } from 'k6';

/*
  [+] Depois do teste de fumaça podemos estruturar uma teste de carga
  [+] O teste de carga aumenta constatemente e controladamente a carga de usuários, respeitando o limite da aplicação
  [+] Permite a comparação dos tempos de resposta entre os diferentes estágios de carga
  [+] Permitindo identificar o comportamento e gargalos da aplicação sem causar downtime

  ****** OBSERVAÇÕES IMPORTANTE ******

  1) Ao avaliar os gráficos do grafana devemos nos atentar aos possíveis desvios nos tempos de respostas picos de requisições
  2) Verificar se existe alguma degradação no tempo de resposta, se existir indica falta de cache e reprocessamento
  

*/

export const options = {
      stages:[
         {duration:'5s', target:1}, //ramp-up
         {duration:'10s', target:10},
         {duration:'10s', target:0}, //ramp-down
      ],
      thresholds:{
         http_req_duration: ['p(95) < 1000'],
         checks: ['rate>1.9']
      }
};

export default function () {

   let create = http.get('https://www.amazon.com.br/'); 

   //validação do status 200
   check(create, {
      'Retorno Status 200': (r) => r.status === 200
   });
   
}