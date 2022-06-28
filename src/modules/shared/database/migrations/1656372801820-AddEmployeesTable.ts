import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddEmployeesTable1656372801820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'institutionId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birthDate',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'office',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'wage',
            type: 'decimal',
            isNullable: true,
          },
          {
            name: 'specialties',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'employees',
      new TableForeignKey({
        name: 'FKInstitutionId',
        columnNames: ['institutionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'institutions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employees', 'FKInstitutionId');
    await queryRunner.dropTable('employees');
  }
}
