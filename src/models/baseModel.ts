import { Column, Model, Table } from 'sequelize-typescript'

@Table({ underscored: true, paranoid: true, timestamps: true })
export abstract class BaseModel<T> extends Model<T> {
  @Column
  readonly createdAt: Date

  @Column
  readonly updatedAt: Date

  @Column
  readonly deletedAt: Date

  constructor(input?: any) {
    super()
    if (input) {
      Object.assign(this, input)
    }
  }
}
