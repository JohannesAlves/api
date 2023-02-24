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

        await strapi.service("api::game.game").populate();

        ctx.send({ message: "Finished populating" });
      } catch (error) {
        console.error(error);
      }
    },
  })
);
