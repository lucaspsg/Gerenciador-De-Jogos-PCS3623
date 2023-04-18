import GameSchema from "@modules/games/infra/database/schemas/Games";
import GamesRepository from "@modules/games/infra/database/repositories/Games";
import IGamesRepository from "@modules/games/repositories/IGamesRepository";


import AppError from '@shared/errors/AppError';


interface IRequest {
  name: string;
  price: number;
  size: number;
  launch_date: Date;
  category: string;
  image: string;
}

export default class CreateGamesService {

  private gamesRepository : IGamesRepository = new GamesRepository();

  public async execute({
   name, price, size, launch_date, category, image,
  }: IRequest): Promise<GameSchema> {
    const gameAlreadyExists = await this.gamesRepository.findByName(name);

    if (gameAlreadyExists) throw new AppError('Game with same name already exists');

    const game = this.gamesRepository.create({
      name,
      price,
      size,
      launch_date,
      category,
      image,
    });

    return game;
  }
}
