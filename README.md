# Backend

## Buildar e executar a aplicação
Dentro da pasta do projeto, execute o seguinte comando: 
```sh
./gradlew build && java -jar build/libs/jpa-example.jar
```
O projeto será buildado e executado. É necessário ter java jdk 8 instalado. 

Ela irá rodar automaticamente na porta 4000

## Subindo o banco de dados
Para subir o banco de dados é necessário ter o docker instalado
```
docker-compose up 
```

### Usuario e Senha:
usuario: dev
senha: password

### Visualização dos dados
As tabelas poderão ser vistas assim que o backend buildar
As informações poderão ser vistas assim que o frontend rodar (ele chama um controler de inicializador para inserir informações básicas no banco)
