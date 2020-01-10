import { Table, Column } from 'sequelize-typescript'
import { BaseModel } from './baseModel'

@Table
export default class AccessToken extends BaseModel<AccessToken> {
  @Column
  userId: string
}
