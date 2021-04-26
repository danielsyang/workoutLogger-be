import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseWhereUniqueInput } from "../../../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;
}
