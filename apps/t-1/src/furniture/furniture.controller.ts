import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FurnitureService } from "./furniture.service";
import { FurnitureControllerBase } from "./base/furniture.controller.base";

@swagger.ApiTags("furnitures")
@common.Controller("furnitures")
export class FurnitureController extends FurnitureControllerBase {
  constructor(
    protected readonly service: FurnitureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
