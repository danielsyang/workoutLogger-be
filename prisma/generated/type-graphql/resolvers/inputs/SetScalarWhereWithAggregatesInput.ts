import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPerceptionWithAggregatesFilter } from "../inputs/EnumPerceptionWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reps?: IntWithAggregatesFilter | undefined;

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
