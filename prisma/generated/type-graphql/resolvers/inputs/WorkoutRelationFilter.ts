import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutWhereInput } from "../inputs/WorkoutWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WorkoutRelationFilter {
  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  is?: WorkoutWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  isNot?: WorkoutWhereInput | undefined;
}
