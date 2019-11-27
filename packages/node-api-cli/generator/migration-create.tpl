import { QueryInterface, DataTypes } from 'sequelize';
export default class {{ name }} {
    async up(query: QueryInterface, dataTypes: DataTypes) {
        await query.createTable('{{table_name}}', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.NUMBER,
            },

            // Other Database Fields

            created_at: {
                allowNull: false,
                type: dataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: dataTypes.DATE
            }
        });
    }

    async down(query: QueryInterface) {
        await query.dropTable("{{table_name}}");
    }
}