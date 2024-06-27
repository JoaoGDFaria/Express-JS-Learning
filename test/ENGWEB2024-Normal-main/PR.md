# ENGWEB2024-Normal

# Questão 1

## 1.1

Primeiramente, alterei o formato, convertendo de CSV para JSON.
Além disso, alterei as entradas com nome `idcontrato` para `_id`, com o find e replace do VSCode.
Depois, utilizei os seguintes comandos:
```
docker run -d -p 27017 --name teste2024 mongo    

docker cp csvjson.json teste2024:/tmp 

docker exec -it teste2024 bash 

mongoimport -d contratos -c contratos /tmp/csvjson.json  --jsonArray

mongosh

use contratos
```

Depois utilizei o comando de forma a verificar se os dados foram inseridos corretamente
```
db.contratos.find()
```

## 1.2

O ficheiro txt com as queries em questão encontra-se em `ex1/queries.txt`

## 1.3
Comecei com os seguintes comandos
```
npx express-generator --no-view apiDados
cd .\apiDados\
```

Depois, instalei as dependências necessárias
```
npm install
npm install mongoose
```

Alterei a porta para 16000 no ficheiro `bin/www`

Utilizei o mongoose para criar a conexão com a base de dados, e criei o modelo de dados, os respetivos controladores e rotas.

Relativamente ao `GET /contratos?entidade=EEEE`, assumi que o EEEE se tratava do NIPC da entidade, e criei a rota correspondente.

Utilizei o comando `npm start` para iniciar o servidor.

Utilizei o POSTMAN para testar a correta implementação das rotas.

# Questão 2

Primeiramente criei o esqueleto com o comando
```
npx express-generator interVisual --view=pug
cd .\interVisual\
```

Depois, instalei as dependências necessárias, em especial o `axios` pois é este que comunica com a API que responde na porta 16000

```
npm install
npm install axios
```

Alterei a porta para 16001 no ficheiro `ex1/apiDados/bin/www`, como pedido no enunciado.

Esta aplicação é executada com o comando `npm start`.

## 2.1

Criei a rota `/` que faz um pedido GET à API que responde na porta 16000, e devolve os contratos presentes na base de dados. Este pedido é feito através do `axios`.

A interface foi criada com o pug, e o ficheiro encontra-se em `ex2/interVisual/views/contratosListPage.pug` . Os argumentos são passados através do render.

## 2.2

Criei a rota `/:id` que faz um pedido GET à API que responde na porta 16000, e devolve o contrato com o id especificado. Este pedido é feito através do `axios`. 

A interface foi criada com o pug, e o ficheiro encontra-se em `ex2/interVisual/views/contratoPage.pug`. Novamente, os argumentos são passados através do render.

## 2.3

Criei a rota `/entidades/:nipc` que faz um pedido GET à API que responde na porta 16000, e devolve os contratos celebrados pela entidade com o nipc especificado. Este pedido é feito através do axios. 

Posteriormente, é calculado o valor total dos contratos celebrados por esta entidade, correndo a lista de contratos e somando os valores neles presentes.

A interface foi criada com o pug, e o ficheiro encontra-se em `ex2/interVisual/views/entidadePage.pug`. Novamente, os argumentos são passados através do render. No topo da página, é apresentado o nome da entidade, o seu identificador e, abaixo, o valor total dos contratos celebrados por esta.




