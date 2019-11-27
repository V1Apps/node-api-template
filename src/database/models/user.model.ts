import { Table, Column, HasMany } from 'sequelize-typescript';
import { Model } from '../../core/sequelize/model';

@Table
export default class User extends Model<User> {
    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    created_at: string;

    @Column
    updated_at: string;
}