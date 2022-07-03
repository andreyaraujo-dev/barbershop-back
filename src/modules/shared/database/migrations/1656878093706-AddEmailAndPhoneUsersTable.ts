import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEmailAndPhoneUsersTable1656878093706
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'phone',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'email');
    await queryRunner.dropColumn('users', 'phone');
  }
}
