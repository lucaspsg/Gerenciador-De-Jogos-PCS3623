CREATE TABLE jogo_comprado (
    conta_id INT,
    FOREIGN KEY (conta_id) REFERENCES conta(conta_id),
    jogo_id INT,
    FOREIGN KEY (jogo_id) REFERENCES jogo(jogo_id),
    data_compra DATE NOT NULL,
    tempo_jogado FLOAT NOT NULL,
    curtida BOOLEAN
);
