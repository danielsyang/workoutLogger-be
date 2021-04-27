import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordCreateManyInput } from "../../../inputs/ExerciseRecordCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExerciseRecordArgs {
  @TypeGraphQL.Field(_type => [ExerciseRecordCreateManyInput], {
    nullable: false
  })
  data!: ExerciseRecordCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
