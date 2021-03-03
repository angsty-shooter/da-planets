import express from "express";
import BaseController from "../utils/BaseController";
import { starService } from "../services/StarService";
//import planet

export class starController extends BaseController{
     constructor(){
         super("api/star")
         this.router
            .get("", this.getAll)
            .post("", this.create)
     }

     async getAll(req, res, next){
         try {
             return res.send(await starService.find(req.query))
         } catch (error) {
             next(error)
         }
     }

     async create(req, res, next){
         try {
             res.send(201, await starService.create(req.query))
         } catch (error) {
             next(error)
         }
     }
}