import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordUpdateWithoutExerciseInput } from "../inputs/ExerciseRecordUpdateWithoutExerciseInput";
import { ExerciseRecordWhereUniqueInput } from "../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseRecordUpdateWithoutExerciseInput, {
    nullable: false
  })
  data!: ExerciseRecordUpdateWithoutExerciseInput;
}
