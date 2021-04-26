import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseCreateManyInput } from "../../../inputs/ExerciseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExerciseArgs {
  @TypeGraphQL.Field(_type => [ExerciseCreateManyInput], {
    nullable: false
  })
  data!: ExerciseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
