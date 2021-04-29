import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordOrderByInput } from "../../../inputs/ExerciseRecordOrderByInput";
import { ExerciseRecordWhereInput } from "../../../inputs/ExerciseRecordWhereInput";
import { ExerciseRecordWhereUniqueInput } from "../../../inputs/ExerciseRecordWhereUniqueInput";
import { ExerciseRecordScalarFieldEnum } from "../../../../enums/ExerciseRecordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  where?: ExerciseRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordOrderByInput], {
    nullable: true
  })
  orderBy?: ExerciseRecordOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseRecordWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExerciseRecordWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "reps" | "createdAt" | "updatedAt" | "exerciseId" | "rpe" | "perception"> | undefined;
}
