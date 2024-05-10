/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Furniture } from "./Furniture";
import { FurnitureCountArgs } from "./FurnitureCountArgs";
import { FurnitureFindManyArgs } from "./FurnitureFindManyArgs";
import { FurnitureFindUniqueArgs } from "./FurnitureFindUniqueArgs";
import { CreateFurnitureArgs } from "./CreateFurnitureArgs";
import { UpdateFurnitureArgs } from "./UpdateFurnitureArgs";
import { DeleteFurnitureArgs } from "./DeleteFurnitureArgs";
import { FurnitureService } from "../furniture.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Furniture)
export class FurnitureResolverBase {
  constructor(
    protected readonly service: FurnitureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Furniture",
    action: "read",
    possession: "any",
  })
  async _furnituresMeta(
    @graphql.Args() args: FurnitureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Furniture])
  @nestAccessControl.UseRoles({
    resource: "Furniture",
    action: "read",
    possession: "any",
  })
  async furnitures(
    @graphql.Args() args: FurnitureFindManyArgs
  ): Promise<Furniture[]> {
    return this.service.furnitures(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Furniture, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Furniture",
    action: "read",
    possession: "own",
  })
  async furniture(
    @graphql.Args() args: FurnitureFindUniqueArgs
  ): Promise<Furniture | null> {
    const result = await this.service.furniture(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Furniture)
  @nestAccessControl.UseRoles({
    resource: "Furniture",
    action: "create",
    possession: "any",
  })
  async createFurniture(
    @graphql.Args() args: CreateFurnitureArgs
  ): Promise<Furniture> {
    return await this.service.createFurniture({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Furniture)
  @nestAccessControl.UseRoles({
    resource: "Furniture",
    action: "update",
    possession: "any",
  })
  async updateFurniture(
    @graphql.Args() args: UpdateFurnitureArgs
  ): Promise<Furniture | null> {
    try {
      return await this.service.updateFurniture({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Furniture)
  @nestAccessControl.UseRoles({
    resource: "Furniture",
    action: "delete",
    possession: "any",
  })
  async deleteFurniture(
    @graphql.Args() args: DeleteFurnitureArgs
  ): Promise<Furniture | null> {
    try {
      return await this.service.deleteFurniture(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
