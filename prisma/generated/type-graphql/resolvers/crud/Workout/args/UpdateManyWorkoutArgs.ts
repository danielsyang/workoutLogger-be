import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutUpdateManyMutationInput } from "../../../inputs/WorkoutUpdateManyMutationInput";
import { WorkoutWhereInput } from "../../../inputs/WorkoutWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkoutUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  where?: WorkoutWhereInput | undefined;
}
