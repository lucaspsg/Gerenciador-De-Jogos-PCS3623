CREATE TABLE amizade (
    id_usuario_a INT,
    FOREIGN KEY (id_usuario_a) REFERENCES conta(conta_id),
    id_usuario_b INT,
    FOREIGN KEY (id_usuario_b) REFERENCES conta(conta_id),
    data_amizade DATE NOT NULL
);
