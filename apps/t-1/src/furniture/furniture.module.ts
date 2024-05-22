import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FurnitureModuleBase } from "./base/furniture.module.base";
import { FurnitureService } from "./furniture.service";
import { FurnitureController } from "./furniture.controller";
import { FurnitureResolver } from "./furniture.resolver";

@Module({
  imports: [FurnitureModuleBase, forwardRef(() => AuthModule)],
  controllers: [FurnitureController],
  providers: [FurnitureService, FurnitureResolver],
  exports: [FurnitureService],
})
export class FurnitureModule {}
