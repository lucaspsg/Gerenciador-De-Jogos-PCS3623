interface BoughtGame {
  conta_id: string;
  jogo_id: string;
  data_compra: Date;
  tempo_jogado: number;
  curtida: boolean;
}

export default BoughtGame;
