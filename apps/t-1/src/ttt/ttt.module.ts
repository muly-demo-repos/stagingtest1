import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TttModuleBase } from "./base/ttt.module.base";
import { TttService } from "./ttt.service";
import { TttController } from "./ttt.controller";
import { TttResolver } from "./ttt.resolver";

@Module({
  imports: [TttModuleBase, forwardRef(() => AuthModule)],
  controllers: [TttController],
  providers: [TttService, TttResolver],
  exports: [TttService],
})
export class TttModule {}
