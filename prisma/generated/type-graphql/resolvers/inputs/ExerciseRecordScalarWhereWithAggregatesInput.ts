import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPerceptionWithAggregatesFilter } from "../inputs/EnumPerceptionWithAggregatesFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExerciseRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExerciseRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExerciseRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  reps?: IntNullableListFilter | undefined;

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
  exerciseId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPerceptionWithAggregatesFilter, {
    nullable: true
  })
  perception?: EnumPerceptionWithAggregatesFilter | undefined;
}
