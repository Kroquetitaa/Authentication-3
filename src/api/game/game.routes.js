const GameRoutes = require("express").Router();
const { authorize } = require("../../middleware/auth");
const { getAllGames, getGameById, create, update, remove } = require("./game.controller");
const upload = require('../../middleware/file');
const rateLimit = require("express-rate-limit");

const gameCreateRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1min
  max: 2,
  standardHeaders: true,
  legacyHeaders: false,
});

GameRoutes.get('/', [authorize], getAllGames);
GameRoutes.get('/:id', [authorize], getGameById);
GameRoutes.post('/', [authorize, gameCreateRateLimit], upload.single('cover'), create);
GameRoutes.patch('/:id', [authorize], upload.single('cover'), update);
GameRoutes.delete('/:id', [authorize], remove);


module.exports = GameRoutes;