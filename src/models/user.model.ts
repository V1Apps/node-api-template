import { Table, Column } from 'sequelize-typescript'
import { BaseModel } from './baseModel'

@Table
export default class User extends BaseModel<User> {
  firstName: string

  @Column
  lastName: string

  @Column
  email: string

  @Column
  readonly encryptedPassword: string

  @Column
  readonly createdAt: Date

  @Column
  readonly updatedAt: Date
}
