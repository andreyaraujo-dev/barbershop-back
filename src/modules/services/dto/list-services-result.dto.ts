import { ApiProperty } from '@nestjs/swagger';

import { ServicesEntity } from '../entities/services.entity';
import { CreatedServiceDto } from './created-service.dto';

export class Meta {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  itemCount: number;

  @ApiProperty()
  itemsPerPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  currentPage: number;
}

export class Links {
  @ApiProperty()
  first: string;

  @ApiProperty()
  previous: string;

  @ApiProperty()
  next: string;

  @ApiProperty()
  last: string;
}

export class ListServicesResult {
  @ApiProperty({ type: [CreatedServiceDto] })
  items: ServicesEntity[];

  @ApiProperty({ type: Meta })
  meta: Meta;

  @ApiProperty({ type: Links })
  links: Links;
}
