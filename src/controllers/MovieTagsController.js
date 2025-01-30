const knex = require("../database/knex");

class TagsController {
    async index(request, responde) {
        const { user_id } = request.params;

        const tags = await knex("movie_tags")
        .where({ user_id })

        return responde.json(tags);
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_tags").where({ id }).delete();

        return response.json();
    }
}

module.exports = TagsController;