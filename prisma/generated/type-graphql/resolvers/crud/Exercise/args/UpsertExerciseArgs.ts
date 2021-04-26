import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseCreateInput } from "../../../inputs/ExerciseCreateInput";
import { ExerciseUpdateInput } from "../../../inputs/ExerciseUpdateInput";
import { ExerciseWhereUniqueInput } from "../../../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseCreateInput, {
    nullable: false
  })
  create!: ExerciseCreateInput;

  @TypeGraphQL.Field(_type => ExerciseUpdateInput, {
    nullable: false
  })
  update!: ExerciseUpdateInput;
}
