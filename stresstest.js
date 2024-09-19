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
         { duration:'1m', target:2 }, //Abaixo do normal
         { duration:'3m', target:4 },
         { duration:'3m', target:6 }, //Carga normal
         { duration:'3m', target:5 },
         { duration:'1m', target:7 }, //Ponto de stress
         { duration:'3m', target:7 }, 
         { duration:'1m', target:10 }, //Ponto de saturação
         { duration:'3m', target:10 }, 
         { duration:'5m', target:0 }, //Estágio de recuperação
      ],
      thresholds:{
         http_req_duration: ['p(95) < 1000'],
         checks: ['rate>0.9']
      }
};

export default function () {


   let create = http.get('https://www.amazon.com.br'); 

   //validação do status 200 e da mensagem de sucesso após realização do cadastro de projetos
   check(create, {
      'Retorno Status 200': (r) => r.status === 200,
      'Mensagem após carregamento': (r) => r.html('span').text() === "Contas e Listas"
   });
   
}