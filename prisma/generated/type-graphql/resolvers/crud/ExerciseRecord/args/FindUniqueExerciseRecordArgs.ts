import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordWhereUniqueInput } from "../../../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseRecordWhereUniqueInput;
}
