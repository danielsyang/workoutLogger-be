import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExerciseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExerciseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExerciseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExerciseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  suggestion?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  workoutId?: StringWithAggregatesFilter | undefined;
}
