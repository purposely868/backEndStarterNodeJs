import express from "express";
import {
  getAll,
  getById,
  create,
  modifyPatch,
  modifyPut,
  deleteById,
} from "../controllers/mainController";
const apiRouter = express.Router();

apiRouter.get("/", getAll);
apiRouter.get("/:id", getById);
apiRouter.post("/", create);
apiRouter.patch("/:id", modifyPatch);
apiRouter.put("/:id", modifyPut);
apiRouter.delete("/:id", deleteById);

export default apiRouter;
