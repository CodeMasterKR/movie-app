// src/prisma/prisma.module.ts

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // ← shu decorator qo'shilsa bas
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}