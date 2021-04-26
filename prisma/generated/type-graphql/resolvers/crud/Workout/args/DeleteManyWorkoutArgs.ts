import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutWhereInput } from "../../../inputs/WorkoutWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  where?: WorkoutWhereInput | undefined;
}
