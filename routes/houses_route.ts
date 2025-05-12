import { Router } from "express";
import { getFilteredHouses } from "../controllers/houses_controller";
import { verifyToken } from "../middleware/auth_middleware";

const router = Router();

router.get("/", verifyToken, getFilteredHouses);

export default router;
