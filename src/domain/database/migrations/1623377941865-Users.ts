import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1623377941865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query("create extension if not exists \"uuid-ossp\"");
    
            await queryRunner.createTable(new Table({
                name: "Users",
                columns: [
                    {name: "id", type:"UUID", isPrimary: true},
                    {name: "login", type: "varchar", isUnique: true, isNullable: false},
                    {name: "password", type: "varchar", isNullable: false}      
                ]
            }));
        } catch (e) {
            console.trace(e);
        }
    } 

    public async down(queryRunner: QueryRunner): Promise<void> {
        try{
            await queryRunner.query("drop extension if exists \"uuid-ossp\";");
            await queryRunner.query("drop table Users cascade;");
        } catch (e) {
            console.trace(e);
        }
    }

}
