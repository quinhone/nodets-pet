import { Request, Response } from "express";

import { createMenuObj } from '../helpers/createMenuObj'
import { Pet } from '../models/Pet'

export const search = (req:Request, res:Response) => {

    let query: string = req.query.q as string

    if(!query){
        res.redirect('/')
        return
    }

    res.render('pages/page', {
        menu: createMenuObj(''),
        list: Pet.getFromName(req.query.q as string),
        query
    })
}