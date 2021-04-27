import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordUpdateInput } from "../../../inputs/ExerciseRecordUpdateInput";
import { ExerciseRecordWhereUniqueInput } from "../../../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordUpdateInput, {
    nullable: false
  })
  data!: ExerciseRecordUpdateInput;

  @TypeGraphQL.Field(_type => ExerciseRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseRecordWhereUniqueInput;
}
