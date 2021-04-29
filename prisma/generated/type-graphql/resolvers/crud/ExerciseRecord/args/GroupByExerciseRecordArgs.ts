import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseRecordOrderByInput } from "../../../inputs/ExerciseRecordOrderByInput";
import { ExerciseRecordScalarWhereWithAggregatesInput } from "../../../inputs/ExerciseRecordScalarWhereWithAggregatesInput";
import { ExerciseRecordWhereInput } from "../../../inputs/ExerciseRecordWhereInput";
import { ExerciseRecordScalarFieldEnum } from "../../../../enums/ExerciseRecordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExerciseRecordArgs {
  @TypeGraphQL.Field(_type => ExerciseRecordWhereInput, {
    nullable: true
  })
  where?: ExerciseRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordOrderByInput], {
    nullable: true
  })
  orderBy?: ExerciseRecordOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "reps" | "createdAt" | "updatedAt" | "exerciseId" | "rpe" | "perception">;

  @TypeGraphQL.Field(_type => ExerciseRecordScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExerciseRecordScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
