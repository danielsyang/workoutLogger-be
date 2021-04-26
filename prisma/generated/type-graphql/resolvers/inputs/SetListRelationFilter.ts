import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetWhereInput } from "../inputs/SetWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetListRelationFilter {
  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  every?: SetWhereInput | undefined;

  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  some?: SetWhereInput | undefined;

  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  none?: SetWhereInput | undefined;
}
