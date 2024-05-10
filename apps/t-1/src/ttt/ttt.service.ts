import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TttServiceBase } from "./base/ttt.service.base";

@Injectable()
export class TttService extends TttServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
