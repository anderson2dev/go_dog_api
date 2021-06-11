import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Races1623378054949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "Puppies_race",
                columns: [
                    {name: "id", type: "uuid", isPrimary: true},
                    {name: "description", type: "text", isNullable: false},
                    {name: "name", type: "varchar", isNullable: false}

                ]
            }));
        } catch(e) {
            console.trace(e);
        }
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable("Puppies_race");
        } catch(e) {
           console.trace(e);
        }
    }

}
