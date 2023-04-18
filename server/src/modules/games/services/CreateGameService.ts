import GameSchema from "@modules/games/infra/database/schemas/Games";
import GamesRepository from "@modules/games/infra/database/repositories/Games";
import IGamesRepository from "@modules/games/repositories/IGamesRepository";

interface IRequest {
  nome_jogo: string;
  preco: number;
  tamanho: number;
  dev_id: string;
  data_lanc: Date;
  categoria: string;
  descricao: string;
  capa: string;
}

export default class CreateGamesService {

  private gamesRepository : IGamesRepository = new GamesRepository();

  public async execute({
          nome_jogo,
          preco,
          tamanho,
          dev_id,
          data_lanc,
          categoria,
          descricao,
          capa,
  }: IRequest): Promise<void> {

    await this.gamesRepository.create({
          nome_jogo,
          preco,
          tamanho,
          dev_id,
          data_lanc,
          categoria,
          descricao,
          capa,
    });
  }
}
