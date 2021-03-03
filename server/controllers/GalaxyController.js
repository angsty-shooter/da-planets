import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
import { starService } from "../services/StarService";

export class GalaxyController extends BaseController{

    constructor(){
        super("api/galaxy")
        this.router
            .get("", this.getAll)
            .get("/:id/star", this.getAllStarsByGalaxyId)
            .post("", this.create)
    }

    async getAll(req, res, next){
        try {
            return res.send(await galaxyService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async getAllStarsByGalaxyId(req, res, next) {
        try {
          res.send(await starService.find({ galaxy: req.params.id }));
        } catch (error) {
          next(error);
        }
      }

    async create(req, res, next){
        try {
            res.send(201, await galaxyService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
}