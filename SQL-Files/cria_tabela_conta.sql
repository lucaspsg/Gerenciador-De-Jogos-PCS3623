CREATE TABLE conta (
    conta_id INT PRIMARY KEY,
    nome_conta VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    carteira FLOAT NOT NULL,
    desenvolvedor BOOLEAN NOT NULL,
    imagem_perfil VARCHAR(100)
);