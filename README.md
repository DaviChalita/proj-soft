# Backend

## Buildar e executar a aplicação
Dentro da pasta do projeto, execute o seguinte comando: 
```sh
./gradlew build && java -jar build/libs/jpa-example.jar
```
O projeto será buildado e executado. É necessário ter java jdk 8 instalado. 

Após a execução do comando, a aplicação irá rodar automaticamente na porta 4000.

## Subindo o banco de dados
Para subir o banco de dados é necessário ter o docker instalado. Após instalar o docker, execute o seguinte comando na pasta do projeto. 

```sh
docker-compose up 
```

Isso fará com que um banco em SQL seja inicializado na porta 3306.

### Usuario e Senha:
usuario: dev
senha: password

### Visualização dos dados
As tabelas poderão ser vistas assim que o backend buildar
As informações poderão ser vistas assim que o frontend rodar (ele chama um controler de inicializador para inserir informações básicas no banco)
