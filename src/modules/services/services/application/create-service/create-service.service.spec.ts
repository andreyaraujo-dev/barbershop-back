import { ServicesEntity } from 'src/modules/services/entities/services.entity';
import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CreateServiceService } from './create-service.service';

describe('CreateService', () => {
  let serviceRepository: Repository<ServicesEntity>;
  let createServiceService: CreateServiceService;

  const ServiceRepositoryProvider = {
    provide: getRepositoryToken(ServicesEntity),
    useValue: {
      create: jest.fn(),
      save: jest.fn(),
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ServiceRepositoryProvider, CreateServiceService],
    }).compile();

    serviceRepository = app.get(getRepositoryToken(ServicesEntity));
    createServiceService = app.get(CreateServiceService);
  });

  it('should be defined', () => {
    expect(serviceRepository).toBeDefined();
    expect(createServiceService).toBeDefined();
  });
});
