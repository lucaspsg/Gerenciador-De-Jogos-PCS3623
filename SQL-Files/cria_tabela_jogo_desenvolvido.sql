CREATE TABLE jogo_desenvolvido (
    conta_id INT,
    FOREIGN KEY (conta_id) REFERENCES conta(conta_id),
    jogo_id INT,
    FOREIGN KEY (jogo_id) REFERENCES jogo(jogo_id),
    faturamento FLOAT NOT NULL
);
