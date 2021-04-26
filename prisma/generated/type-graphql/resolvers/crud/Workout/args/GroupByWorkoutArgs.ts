import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutOrderByInput } from "../../../inputs/WorkoutOrderByInput";
import { WorkoutScalarWhereWithAggregatesInput } from "../../../inputs/WorkoutScalarWhereWithAggregatesInput";
import { WorkoutWhereInput } from "../../../inputs/WorkoutWhereInput";
import { WorkoutScalarFieldEnum } from "../../../../enums/WorkoutScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  where?: WorkoutWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkoutOrderByInput], {
    nullable: true
  })
  orderBy?: WorkoutOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => WorkoutScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WorkoutScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
