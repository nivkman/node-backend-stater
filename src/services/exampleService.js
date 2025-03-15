import { sendMessage } from "kafka-node-handler";
import { Logger } from "logger-standard";
import config from "../config/index.js";
import Example from "../models/example.js";

export default class ExampleService {
  constructor() {
    this._logger = new Logger({
      service: config.SERVICE,
      showDate: true,
    });
  }

  async getExamplesByFilter({
    filter = {},
    limit = 25,
    skip = 0,
    sort = null,
  }) {
    try {
      return await Example.find(filter).limit(limit).skip(skip).sort(sort);
    } catch (error) {
      this._logger.error(error.message);
    }
  }

  async getExampleById(id) {
    try {
      return await Example.findById(id);
    } catch (error) {
      this._logger.error(error.message);
    }
  }

  async createExample(params) {
    try {
      const example = await Example.create(params);
      this._logger.info("Example creation complete", example._id);
      return example;
    } catch (error) {
      this._logger.error(error.message);
    }
  }

  async updateExampleById(id, params) {
    try {
      const example = await Example.findByIdAndUpdate(id, params, {
        new: true,
      });
      this._logger.info("Example update completed successfully", example._id);
      return await example;
    } catch (error) {
      this._logger.error(error.message);
    }
  }

  async deleteExampleById(id) {
    try {
      const removedExample = await Example.findByIdAndRemove(id);
      if (!removedExample) {
        throw new Error(`Couldn't delete example (id: ${id})`);
      }
      this._logger("Example removal complete", id);
      return { deletedExampleId: id };
    } catch (error) {
      this._logger.error(error.message);
    }
  }
}
