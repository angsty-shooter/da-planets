import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";

export class galaxyController extends BaseController{
     constructor(){
         super("api/galaxy")
         this.router
            .get("", this.getAll)
            .post("", this.create)
     }

     async getAll(req, res, next){
         try {
             return res.send(await galaxyService.find(req.query))
         } catch (error) {
             next(error)
         }
     }

     async create(req, res, next){
         try {
             res.send(201, await galaxyService.create(req.query))
         } catch (error) {
             next(error)
         }
     }
}