import express from 'express'
import { User } from '../../models'

export default async (_: express.Request, response: express.Response): Promise<void> => {
  const users = await User.findAll()
  response.json(users)
}
