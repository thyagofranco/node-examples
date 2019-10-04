import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes'
import database from './models/config/database'


class App {
    public express: express.Application

    public constructor () {

        this.express = express()

        this.middlewares()
        this.database()
        this.routes()

    }

    private middlewares (): void {
        this.express.use(bodyParser.urlencoded({ extended: false}))

    }

    private routes (): void {
        this.express.use(routes)
    }

    private database(): void {
        database.connect()
    }
}


export default new App().express