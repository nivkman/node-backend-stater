import express from "express";
import ExampleService from "../services/exampleService.js";
const router = express();

const _exampleService = new ExampleService();

// health test
router.get("/health", async (req, res) => {
  return res.send("health checked successfully");
});

// get examples by filter
router.get("/", async (req, res) => {
  const result = await _exampleService.getExamplesByFilter(req.query);
  return res.json(result);
});

// get example by id
router.get("/:id", async (req, res) => {
  const result = await _exampleService.getExampleById(req.params.id);
  return res.json(result);
});

// create new example
router.post("/", async (req, res) => {
  const result = await _exampleService.createExample(req.body);
  return res.json(result);
});

// edit example
router.put("/:id", async (req, res) => {
  const result = await _exampleService.updateExampleById(
    req.params.id,
    req.body
  );
  return res.json(result);
});

// delete example
router.delete("/:id", async (req, res) => {
  const result = await _exampleService.deleteExampleById(req.params.id);
  return res.json(result);
});

export default router;
