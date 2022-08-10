const Game = require("./game.model");
const { setError } = require("../../helpers/utils/error");
const { deleteFile } = require("../../middleware/delete-file");

const getAllGames = async (req, res, next) => {
  try {
    const games = Game.find().sort({ createAt: 'desc' }).populate("creator");
    return res.status(200).json({
      message: 'All Games',
      games
    })
  } catch (error) {
    return next(setError(500, error.message | 'Failed recover all game'));
  }
}

const getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await (await Game.findById(id)).populate("creator ");
    if (!game) return next(setError(404, error.message | 'Game not found'));
    return res.status(200).json({
      message: 'Game by Id',
      game
    })

  } catch (error) {
    return next(setError(500, error.message | 'Failed game id'));
  }
}

const create = async (req, res, next) => {
  try {
    const game = new Game(req.body);
    // Recogemos el path -> url de cloudinary - cover
    if (req.file) game.cover = req.file.path;
    const gameInDb = await game.save();

    return res.status(201).json({
      message: 'Created new Game',
      gameInDb
    })
  } catch (error) {
    return next(setError(500, error.message | 'Failed create game'));
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const game = new Game(req.body);
    game._id = id;
    // Si pasamos un nuevo cover -> se añade sobre su porpiedad
    if (req.file) game.cover = req.file.path;
    const updatedGame = await Game.findByIdAndUpdate(id, game);
    if (!updatedGame) return next(setError(404, 'Game not found'));
    return res.status(201).json({
      message: 'Updated Game',
      updatedGame
    })

  } catch (error) {
    return next(setError(500, error.message | 'Failed updated game'));
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    if (game.cover) deleteFile(game.cover);
    const deletedGame = await Game.findByIdAndDelete(id);
    if (!deletedGame) return next(setError(404, 'Game not found'));
    return res.status(200).json({
      message: 'Delete Game',
      deletedGame
    })
  } catch (error) {
    return next(setError(500, error.message | 'Failed deleted game'));
  }
}

module.exports = { getAllGames, getGameById, create, update, remove };