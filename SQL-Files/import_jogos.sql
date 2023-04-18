LOAD DATA LOCAL INFILE '/home/lparra/usp/banco_de_dados/Gerenciador-De-Jogos-PCS3623/SQL-Files/jogos.csv'
INTO TABLE jogo
FIELDS TERMINATED BY ';'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(
    game_id,
    nome_jogo,
    preco,
    tamanho,
    dev_id,
    data_lanc,
    categoria,
    quant_downloads,
    descricao,
    capa
);
