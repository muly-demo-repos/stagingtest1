/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FurnitureWhereUniqueInput } from "./FurnitureWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FurnitureUpdateInput } from "./FurnitureUpdateInput";

@ArgsType()
class UpdateFurnitureArgs {
  @ApiProperty({
    required: true,
    type: () => FurnitureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FurnitureWhereUniqueInput)
  @Field(() => FurnitureWhereUniqueInput, { nullable: false })
  where!: FurnitureWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FurnitureUpdateInput,
  })
  @ValidateNested()
  @Type(() => FurnitureUpdateInput)
  @Field(() => FurnitureUpdateInput, { nullable: false })
  data!: FurnitureUpdateInput;
}

export { UpdateFurnitureArgs as UpdateFurnitureArgs };
