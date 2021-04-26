import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseWhereInput } from "../../../inputs/ExerciseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  where?: ExerciseWhereInput | undefined;
}
