import express from 'express'
import User from '../../models/user.model'

export default async (request: express.Request, response: express.Response): Promise<void> => {
  const users = await User.findAll()
  response.json(users)
}
