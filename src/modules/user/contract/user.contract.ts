
import {Request,Response} from "express";
import { User } from "../models/user.model";

export interface IUserController{
  createUser(req:Request,res:Response):Promise<Response>;
  updateUser(req:Request,res:Response):Promise<Response>;
  deleteUser(req:Request,res:Response):Promise<Response>;
  getAllUser(req:Request,res:Response):Promise<Response>;
  
};

export interface IUserService{
    createUser(user:User):Promise<User>;
    updateUser(user:User):Promise<void>;
    deleteUser(idUser:number):Promise<void>;
    getAllUser():Promise<User[]>;
  }

export interface IUserRepository{
    create(user:User):Promise<User>;
    update(user:User):Promise<void>;
    delete(idUser:number):Promise<void>;
    getAll():Promise<User[]>;
  }

