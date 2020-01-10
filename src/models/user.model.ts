import { Table, Column } from 'sequelize-typescript'
import { BaseModel } from './baseModel'

@Table
export default class User extends BaseModel<User> {
  @Column
  firebaseId: string

  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  email: string

  @Column
  readonly createdAt: Date

  @Column
  readonly updatedAt: Date
}
