import { Request, Response } from 'express'
import { User } from '../models/User'

class UserController {
  public async find (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
        const query = {_id: ""}

        if (id) {
            query._id = id
        }

        try {

            const users = await User.find(query)
            return res.json(users)
            
        } catch (error) {
            return res.send('Failed to find user')
        }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
        const user = new User(req.body)
        await user.save()

        res.status(201).send('OK')
    } catch (error) {
        res.send(error)   
    }
  }

}

export default new UserController()