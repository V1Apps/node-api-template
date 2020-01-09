import { Model, Table } from 'sequelize-typescript';

@Table({ underscored: true, paranoid: true, timestamps: true })
export class BaseModel<T> extends Model<T>{
    constructor(input?: any) {
        super();
        if (input) {
            Object.assign(this, input);
        }
    }
}