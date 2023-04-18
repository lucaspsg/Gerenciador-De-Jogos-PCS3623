LOAD DATA LOCAL INFILE 'Insira o caminho completo do arquivo .csv aqui'
INTO TABLE conquista
FIELDS TERMINATED BY ';'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(
    jogo_id,
    conquista_id,
    nome_conquista,
    descricao_conquista
);
