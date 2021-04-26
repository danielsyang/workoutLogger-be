import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseWhereInput } from "../inputs/ExerciseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRelationFilter {
  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  is?: ExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  isNot?: ExerciseWhereInput | undefined;
}
