import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Puppies1623378063227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "Puppies",
                columns: [
                    {name: "id", type: "UUID", isPrimary: true},
                    {name: "name", type: "varchar", isNullable: false},
                    {name: "age", type: "timetz", isNullable: true},
                    {name: "bio", type: "text", isNullable: true},
                    {name: "race_id", type: "uuid", isNullable: false},
                    {name:"owner_id", type: "uuid", isNullable: false},
                ]
            }));
        }catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable("Puppies");
        } catch(e) {
            console.trace(e);
        }
    }

}
