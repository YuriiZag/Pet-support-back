import {Request,Response, NextFunction} from "express"

const errorMiddleware = (error: Error, req:Request, res:Response, next:NextFunction) => {
    if(!error.message) {
        error.message = 'http error'
    }
    res.status(500).json({message: error.message})
}

export default errorMiddleware