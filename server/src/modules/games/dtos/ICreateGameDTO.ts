interface ICreateGameDTO {
  nome_jogo: string;
  preco: number;
  tamanho: number;
  dev_id: string;
  data_lanc: Date;
  categoria: string;
  descricao: string;
  capa: string;
}

export default ICreateGameDTO;
