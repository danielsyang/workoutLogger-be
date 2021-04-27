import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordWhereInput } from "../inputs/ExerciseRecordWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordListRelationFilter {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  every?: ExerciseRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  some?: ExerciseRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  none?: ExerciseRecordWhereInput | undefined;
}
