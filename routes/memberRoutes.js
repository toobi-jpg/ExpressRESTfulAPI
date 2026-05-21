import express from "express";
import * as memberService from "../services/memberService.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    const members = await memberService.getMembersByDates(startDate, endDate);
    res.json(members);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await memberService.getMemberById(id);
    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.json(member);
  } catch (error) {
    next(error);
  }
});

export default router;
