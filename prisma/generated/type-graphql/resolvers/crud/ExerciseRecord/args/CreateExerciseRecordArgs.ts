import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordCreateInput } from "../../../inputs/ExerciseRecordCreateInput";

@TypeGraphQL.ArgsType()
export class CreateExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordCreateInput, {
    nullable: false
  })
  data!: ExerciseRecordCreateInput;
}
