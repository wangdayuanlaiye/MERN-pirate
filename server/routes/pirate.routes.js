const pirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.post("/api/pirate", pirateController.createNewPirate);
  app.get("/api/pirate", pirateController.getAllPirates);
  app.get("/api/pirate/:id", pirateController.getOnePirate);
  app.put("/api/pirate/:id", pirateController.updatePirate);
  app.delete("/api/pirate/:id", pirateController.deleteExistingUser);
};