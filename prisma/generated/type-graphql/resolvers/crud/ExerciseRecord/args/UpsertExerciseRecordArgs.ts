import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordCreateInput } from "../../../inputs/ExerciseRecordCreateInput";
import { ExerciseRecordUpdateInput } from "../../../inputs/ExerciseRecordUpdateInput";
import { ExerciseRecordWhereUniqueInput } from "../../../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseRecordCreateInput, {
    nullable: false
  })
  create!: ExerciseRecordCreateInput;

  @TypeGraphQL.Field(_type => ExerciseRecordUpdateInput, {
    nullable: false
  })
  update!: ExerciseRecordUpdateInput;
}
