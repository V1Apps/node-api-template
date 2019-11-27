import { Model as SequelizeModel } from 'sequelize-typescript';

export class Model<T> extends SequelizeModel<T>{
    constructor(input?: any) {
        super();
        if (input) {
            Object.assign(this, input);
        }
    }
}