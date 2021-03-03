import express from "express";
import BaseController from "../utils/BaseController";
import { planetService } from "../services/PlanetService";
import { moonService } from "../services/MoonService";

export class planetController extends BaseController{
     constructor(){
         super("api/planet")
         this.router
            .get("", this.getAll)
            .get("/:id/moon", this.getAllMoonsByPlanetId)
            .post("", this.create)
     }

     async getAll(req, res, next){
         try {
             return res.send(await planetService.find(req.query))
         } catch (error) {
             next(error)
         }
     }

     async getAllMoonsByPlanetId(req, res, next){
         try {
             res.send(await moonService.find({ planet: req.params.id }))
         } catch (error) {
             next(error)
         }
     }

     async create(req, res, next){
         try {
             res.send(201, await planetService.create(req.query))
         } catch (error) {
             next(error)
         }
     }
}