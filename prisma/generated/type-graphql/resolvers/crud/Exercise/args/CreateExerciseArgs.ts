import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseCreateInput } from "../../../inputs/ExerciseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseCreateInput, {
    nullable: false
  })
  data!: ExerciseCreateInput;
}
