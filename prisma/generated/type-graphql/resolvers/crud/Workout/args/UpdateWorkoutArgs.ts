import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutUpdateInput } from "../../../inputs/WorkoutUpdateInput";
import { WorkoutWhereUniqueInput } from "../../../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutUpdateInput, {
    nullable: false
  })
  data!: WorkoutUpdateInput;

  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;
}
