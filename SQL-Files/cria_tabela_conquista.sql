CREATE TABLE conquista (
    jogo_id INT,
    FOREIGN KEY (jogo_id) REFERENCES jogo(jogo_id),
    conquista_id INT PRIMARY KEY,
    nome_conquista VARCHAR(50) NOT NULL,
    descricao_conquista VARCHAR(200)
);
