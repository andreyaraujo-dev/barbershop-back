import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEmailAndPhoneInstitutionsTable1656877861885
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'institutions',
      new TableColumn({
        name: 'phone',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.addColumn(
      'institutions',
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('institutions', 'email');
    await queryRunner.dropColumn('institutions', 'phone');
  }
}
