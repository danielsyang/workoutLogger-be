import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPerceptionFilter } from "../inputs/EnumPerceptionFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereInput], {
    nullable: true
  })
  AND?: ExerciseRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereInput], {
    nullable: true
  })
  OR?: ExerciseRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereInput], {
    nullable: true
  })
  NOT?: ExerciseRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  reps?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  exerciseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPerceptionFilter, {
    nullable: true
  })
  perception?: EnumPerceptionFilter | undefined;
}
