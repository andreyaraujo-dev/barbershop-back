import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { InstitutionsMocks } from '../../../__mocks__/InstitutionsMocks';
import { InstitutionsEntity } from '../../../institutions.entity';
import { ListInstitutionsService } from './list-institutions.service';

describe('List institutions', () => {
  const institutionsMocks = new InstitutionsMocks();
  let listInstitutionService: ListInstitutionsService;
  let institutionRepository: Repository<InstitutionsEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListInstitutionsService,
        {
          provide: getRepositoryToken(InstitutionsEntity),
          useValue: {
            find: jest
              .fn()
              .mockResolvedValue([
                institutionsMocks.createInstitution(),
                institutionsMocks.createInstitution(),
              ]),
          },
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

  it('should return a institution list', async () => {
    const result = await listInstitutionService.execute();

    expect(result).toHaveLength(2);
    expect(institutionRepository.find).toBeCalledTimes(1);
  });
});
