import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FurnitureServiceBase } from "./base/furniture.service.base";

@Injectable()
export class FurnitureService extends FurnitureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
