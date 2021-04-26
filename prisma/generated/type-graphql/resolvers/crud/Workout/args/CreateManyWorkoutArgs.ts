import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutCreateManyInput } from "../../../inputs/WorkoutCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWorkoutArgs {
  @TypeGraphQL.Field(_type => [WorkoutCreateManyInput], {
    nullable: false
  })
  data!: WorkoutCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
