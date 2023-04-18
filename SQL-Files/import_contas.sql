LOAD DATA LOCAL INFILE 'Insira o caminho completo do arquivo .csv aqui'
INTO TABLE conta
FIELDS TERMINATED BY ';'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(
    conta_id,
    nome_conta,
    email,
    senha,
    carteira,
    desenvolvedor,
    imagem_perfil
);