#!/bin/sh

if [ "$0" == "" ]; then
    echo "Migration name is required";
    exit 1
fi

cat > ./src/database/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts <<EOL
        import { QueryInterface, DataType, DataTypes } from 'sequelize';
        export default class $1 {
            async up(query: QueryInterface, dataType: DataType) {
                return await query.createTable('table-name', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: DataTypes.NUMBER,
                    },

                    // Other Database Fields

                    created_at: {
                        allowNull: false,
                        type: DataTypes.DATE
                    },
                    updated_at: {
                        allowNull: false,
                        type: DataTypes.DATE
                    }
                });
            }

            async down(query: QueryInterface) {
                await query.dropTable("table-name");
            }
        }
EOL