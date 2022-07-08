import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateScheduleTable1656976174513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'schedules',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'userId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'employeeId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'institutionId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'serviceId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'scheduleDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'paymentMethod',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'finished',
            type: 'boolean',
            isNullable: true,
            default: false,
          },
          {
            name: 'canceled',
            type: 'boolean',
            isNullable: true,
            default: false,
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
      'schedules',
      new TableForeignKey({
        name: 'FKScheduleUserId',
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'schedules',
      new TableForeignKey({
        name: 'FKScheduleInstitutionId',
        columnNames: ['institutionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'institutions',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'schedules',
      new TableForeignKey({
        name: 'FKScheduleEmployeeId',
        columnNames: ['employeeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employees',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'schedules',
      new TableForeignKey({
        name: 'FKScheduleServiceId',
        columnNames: ['serviceId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'services',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('schedules', 'FKScheduleServiceId');
    await queryRunner.dropForeignKey('schedules', 'FKScheduleEmployeeId');
    await queryRunner.dropForeignKey('schedules', 'FKScheduleInstitutionId');
    await queryRunner.dropForeignKey('schedules', 'FKScheduleUserId');
    await queryRunner.dropTable('schedules');
  }
}
