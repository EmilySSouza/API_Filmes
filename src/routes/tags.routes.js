const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController");

const movieTagsRoutes = Router();

const movieTagsController = new MovieTagsController();

movieTagsRoutes.get("/:user_id", movieTagsController.index);
movieTagsRoutes.delete("/:id", movieTagsController.delete);

module.exports = movieTagsRoutes;