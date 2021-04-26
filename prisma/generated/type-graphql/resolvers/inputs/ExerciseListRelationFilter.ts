import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseWhereInput } from "../inputs/ExerciseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseListRelationFilter {
  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  every?: ExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  some?: ExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  none?: ExerciseWhereInput | undefined;
}
