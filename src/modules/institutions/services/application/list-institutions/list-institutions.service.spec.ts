import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { InstitutionsMocks } from '../../../__mocks__/InstitutionsMocks';
import { InstitutionsEntity } from '../../../entities/institutions.entity';
import { ListInstitutionsService } from './list-institutions.service';

describe('List institutions', () => {
  const institutionsMocks = new InstitutionsMocks();
  let listInstitutionService: ListInstitutionsService;
  let institutionRepository: Repository<InstitutionsEntity>;

  const mockRepository = () => ({
    createQueryBuilder: jest.fn().mockReturnValue({
      limit: jest.fn().mockReturnThis(),
      offset: jest.fn().mockReturnThis(),
      cache: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockReturnThis(),
      clone: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
    }),
    find: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListInstitutionsService,
        {
          provide: getRepositoryToken(InstitutionsEntity),
          useValue: mockRepository,
        },
      ],
    }).compile();

    listInstitutionService = module.get<ListInstitutionsService>(
      ListInstitutionsService,
    );
    institutionRepository = module.get<Repository<InstitutionsEntity>>(
      getRepositoryToken(InstitutionsEntity),
    );
  });

  it('should be defined', () => {
    expect(listInstitutionService).toBeDefined();
    expect(institutionRepository).toBeDefined();
  });

  // it('should return a institution list', async () => {
  //   const result = await listInstitutionService.execute({
  //     limit: 10,
  //     page: 1,
  //     route: '/institutions',
  //   });

  //   expect(result).toHaveLength(2);
  //   // expect(institutionRepository.find).toBeCalledTimes(1);
  // });
});
