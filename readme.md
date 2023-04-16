precisa ter o mariadb instalado no pc e docker

rodar o seguinte comando:
    docker run -p 127.0.0.1:3306:3306  --name gerenciador-jogos -e MARIADB_ROOT_PASSWORD=123 -d mariadb:latest 

dps basta entrar na pasta server, rodar "yarn" para instalar as dependencias e rodar "yarn dev" para rodar o server na porta 8080.
isso eh soum setup pra conexao do node com maria db
