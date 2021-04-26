import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutWhereUniqueInput } from "../../../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;
}
