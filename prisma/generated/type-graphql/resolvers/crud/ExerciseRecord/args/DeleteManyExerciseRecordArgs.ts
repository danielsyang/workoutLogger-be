import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordWhereInput } from "../../../inputs/ExerciseRecordWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  where?: ExerciseRecordWhereInput | undefined;
}
