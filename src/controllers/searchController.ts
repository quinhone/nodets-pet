import { Request, Response } from "express";

import { createMenuObj } from '../helpers/createMenuObj'
import { Pet } from '../models/Pet'

export const search = (req:Request, res:Response) => {
    res.render('pages/page', {
        menu: createMenuObj(''),
        list: Pet.getFromName(req.query.q as string),
        query: req.query.q as string
    })
}