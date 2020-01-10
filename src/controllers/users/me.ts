import express from 'express'
import { BaseRequest } from '../../types'

export default async (request: BaseRequest, response: express.Response): Promise<void> => {
  response.json({ data: request.currentUser })
}
