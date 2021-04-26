import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseUpdateManyMutationInput } from "../../../inputs/ExerciseUpdateManyMutationInput";
import { ExerciseWhereInput } from "../../../inputs/ExerciseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExerciseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  where?: ExerciseWhereInput | undefined;
}
