import express from "express";
import BaseController from "../utils/BaseController";
import { moonService } from "../services/MoonService";

export class moonController extends BaseController{
     constructor(){
         super("api/moon")
         this.router
            .get("", this.getAll)
            .post("", this.create)
     }

     async getAll(req, res, next){
         try {
             return res.send(await moonService.find(req.query))
         } catch (error) {
             next(error)
         }
     }

     async create(req, res, next){
         try {
             res.send(201, await moonService.create(req.query))
         } catch (error) {
             next(error)
         }
     }
}