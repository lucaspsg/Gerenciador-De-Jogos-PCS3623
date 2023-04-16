clone o repo

```
git clone git@github.com:lucaspsg/Gerenciador-De-Jogos-PCS3623.git
```

precisa ter o mariadb instalado no pc e docker

rodar o seguinte comando:

```
docker run -p 127.0.0.1:3306:3306  --name gerenciador-jogos -e MARIADB_ROOT_PASSWORD=123 -d mariadb:latest 
```

dps basta entrar na pasta server, rodar "yarn" para instalar as dependencias e rodar "yarn dev" para rodar o server na porta 8080.
isso eh soum setup pra conexao do node com maria db

para acessar uma interface grafica via browser use 

```
docker run --name phpmyadmin -d --link gerenciador-jogos:db -p 8081:80 phpmyadmin/phpmyadmin
```
para acessar a interface grafica, basta colocar localhost:8081 no browser
