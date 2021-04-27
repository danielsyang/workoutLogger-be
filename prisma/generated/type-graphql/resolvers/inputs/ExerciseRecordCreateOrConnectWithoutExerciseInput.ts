import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordCreateWithoutExerciseInput } from "../inputs/ExerciseRecordCreateWithoutExerciseInput";
import { ExerciseRecordWhereUniqueInput } from "../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordCreateOrConnectWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseRecordCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: ExerciseRecordCreateWithoutExerciseInput;
}
