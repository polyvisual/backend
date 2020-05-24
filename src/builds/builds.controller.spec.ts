import { Test, TestingModule } from '@nestjs/testing';
import { BuildsController } from './builds.controller';
import { BuildsService } from './builds.service';
import { PrismaService } from '../prisma/prisma.service';

describe('Builds Controller', () => {
  let controller: BuildsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildsController],
      providers: [{ provide: BuildsService, useValue: {} },
      { provide: PrismaService, useValue: {} }],
    }).compile();

    controller = module.get<BuildsController>(BuildsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
