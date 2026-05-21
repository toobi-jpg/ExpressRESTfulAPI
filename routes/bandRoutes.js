import express from "express";
import * as bandService from "../services/bandService.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { minPrice, maxPrice } = req.query;
    const bands = await bandService.getAllBands(minPrice, maxPrice);
    res.json(bands);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/members", async (req, res, next) => {
  try {
    const { id } = req.params;
    const membersInfo = await bandService.getBandMembers(id);
    if (!membersInfo) {
      return res.status(404).json({ error: "Band not found" });
    }
    res.json(membersInfo);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const band = await bandService.getBandById(id);
    if (!band) {
      return res.status(404).json({ error: "Band not found" });
    }
    res.json(band);
  } catch (error) {
    next(error);
  }
});

export default router;

