import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseOrderByInput } from "../../../inputs/ExerciseOrderByInput";
import { ExerciseScalarWhereWithAggregatesInput } from "../../../inputs/ExerciseScalarWhereWithAggregatesInput";
import { ExerciseWhereInput } from "../../../inputs/ExerciseWhereInput";
import { ExerciseScalarFieldEnum } from "../../../../enums/ExerciseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  where?: ExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExerciseOrderByInput], {
    nullable: true
  })
  orderBy?: ExerciseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "suggestion" | "createdAt" | "updatedAt" | "workoutId">;

  @TypeGraphQL.Field(_type => ExerciseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExerciseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
