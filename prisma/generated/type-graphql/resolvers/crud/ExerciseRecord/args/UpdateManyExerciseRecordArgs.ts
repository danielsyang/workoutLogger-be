import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordUpdateManyMutationInput } from "../../../inputs/ExerciseRecordUpdateManyMutationInput";
import { ExerciseRecordWhereInput } from "../../../inputs/ExerciseRecordWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExerciseRecordUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  where?: ExerciseRecordWhereInput | undefined;
}
