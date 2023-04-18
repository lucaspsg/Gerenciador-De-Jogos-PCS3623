import BoughtGameSchema from "@modules/bought_games/infra/database/schemas/BoughtGames";
import BoughtGamesRepository from "@modules/bought_games/infra/database/repositories/BoughtGames";
import IBoughtGamesRepository from "@modules/bought_games/repositories/IBoughtGamesRepository";

interface IRequest {
  conta_id: string;
  jogo_id: string;
  data_compra: Date;
  tempo_jogado: number;
  curtida: boolean;
}

export default class CreateGamesService {

  private boughtGamesRepository : IBoughtGamesRepository = new BoughtGamesRepository();

  public async execute({
      conta_id,
      jogo_id,
      data_compra,
      tempo_jogado,
      curtida,
  }: IRequest): Promise<void> {

    await this.boughtGamesRepository.create({
      conta_id,
      jogo_id,
      data_compra,
      tempo_jogado,
      curtida,
    });
  }
}
