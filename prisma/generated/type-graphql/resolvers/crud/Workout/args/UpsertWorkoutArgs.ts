import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutCreateInput } from "../../../inputs/WorkoutCreateInput";
import { WorkoutUpdateInput } from "../../../inputs/WorkoutUpdateInput";
import { WorkoutWhereUniqueInput } from "../../../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkoutCreateInput, {
    nullable: false
  })
  create!: WorkoutCreateInput;

  @TypeGraphQL.Field(_type => WorkoutUpdateInput, {
    nullable: false
  })
  update!: WorkoutUpdateInput;
}
