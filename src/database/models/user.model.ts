import { Table, Column, HasMany } from 'sequelize-typescript';
import { Model } from '../config/model';

@Table
export default class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  readonly createdAt: Date;

  @Column
  readonly updatedAt: Date;
}