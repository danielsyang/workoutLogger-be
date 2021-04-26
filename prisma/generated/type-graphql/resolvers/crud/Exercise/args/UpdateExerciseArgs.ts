import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseUpdateInput } from "../../../inputs/ExerciseUpdateInput";
import { ExerciseWhereUniqueInput } from "../../../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseUpdateInput, {
    nullable: false
  })
  data!: ExerciseUpdateInput;

  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;
}
