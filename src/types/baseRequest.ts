import express from 'express'
import { User } from '../models'

export default interface BaseRequest extends express.Request {
  currentUser?: User
}
