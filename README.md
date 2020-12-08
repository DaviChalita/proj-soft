# Backend

## Iniciando a aplicação com Docker:

### 1 - Crie a imagem do Docker: 

sudo docker build -f Dockerfile -t <nome_da_imagem> 

### 2- Rode a imagem do Docker criada: 

sudo docker run -p 8000:8000 <nome_da_imagem>

## Buildar a aplicação

### Rode o comando na pasta do backend:
`./gradlew build && java -jar build/libs/jpa-example.jar`

Ela irá rodar automaticamente na porta 4000

## Vendo o funcionamento do banco de dados

### Usuario e Senha:
usuario: dev
senha: password

### Visualização dos dados
As tabelas poderão ser vistas assim que o backend buildar
As informações poderão ser vistas assim que o frontend rodar (ele chama um controler de inicializador para inserir informações básicas no banco)
