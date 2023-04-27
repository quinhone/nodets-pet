import { Request, Response } from "express";
import { createMenuObj } from '../helpers/createMenuObj'
import { Pet } from '../models/Pet'

export const home = (req:Request, res:Response) => {
    res.render('pages/page', {
        menu: createMenuObj('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: Pet.getAll()
    })
}

export const dogs = (req:Request, res:Response) => {
    res.render('pages/page', {
        menu: createMenuObj('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: Pet.getFromType('dog')
    })
}

export const cats = (req:Request, res:Response) => {
    res.render('pages/page', {
        menu: createMenuObj('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: Pet.getFromType('cat')
    })
}

export const fishes = (req:Request, res:Response) => {
    res.render('pages/page', {
        menu: createMenuObj('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: Pet.getFromType('fish')
    })
}