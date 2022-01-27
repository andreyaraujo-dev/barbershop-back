import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { InstitutionsMocks } from '../../../__mocks__/InstitutionsMocks';
import { InstitutionsEntity } from '../../../institutions.entity';
import { FindInstitutionsService } from './find-institutions.service';

describe('List institutions', () => {
  const institutionsMocks = new InstitutionsMocks();
  let listInstitutionService: FindInstitutionsService;
  let institutionRepository: Repository<InstitutionsEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindInstitutionsService,
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

    listInstitutionService = module.get<FindInstitutionsService>(
      FindInstitutionsService,
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
