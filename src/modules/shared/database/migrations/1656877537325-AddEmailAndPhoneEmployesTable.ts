import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEmailAndPhoneEmployesTable1656877537325
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'employees',
      new TableColumn({
        name: 'phone',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.addColumn(
      'employees',
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('employees', 'email');
    await queryRunner.dropColumn('employees', 'phone');
  }
}
