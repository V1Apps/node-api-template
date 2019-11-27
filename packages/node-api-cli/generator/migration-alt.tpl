import { QueryInterface, DataTypes } from 'sequelize';

export default class {{ name }} {
    async up(query: QueryInterface, dataTypes: DataTypes) {
        // await query.addColumn('{{table_name}}', 'column-name', options);
        // await query.renameColumn('{{table_name}}', 'old-column-name', 'new-column-name');
        // await query.changeColumn('{{table_name}}', 'column-name', options);
        // await query.removeColumn('{{table_name}}', 'column-name');
        // await query.renameTable('{{table_name}}', 'old-column-name');
    }

    async down(query: QueryInterface, dataTypes: DataTypes) {

    }
} 