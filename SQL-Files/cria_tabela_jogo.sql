CREATE TABLE jogo (
    game_id INT PRIMARY KEY,
    nome_jogo VARCHAR(50) NOT NULL,
    preco FLOAT NOT NULL,
    tamanho FLOAT NOT NULL,
    dev_id INT NOT NULL,
    data_lanc DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    quant_downloads INT NOT NULL,
    descricao VARCHAR(500),
    capa VARCHAR(100)
);