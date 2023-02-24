/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
      try {
        console.log("Initialize Populating...");

        const options = {
          sort: "popularity",
          page: "1",
          ...ctx.query,
        };

        await strapi.service("api::game.game").populate(options);

        ctx.send({ message: "Finished populating" });
      } catch (error) {
        console.error(error);
      }
    },
  })
);
