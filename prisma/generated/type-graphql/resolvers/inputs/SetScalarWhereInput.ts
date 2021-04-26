import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPerceptionFilter } from "../inputs/EnumPerceptionFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetScalarWhereInput {
  @TypeGraphQL.Field(_type => [SetScalarWhereInput], {
    nullable: true
  })
  AND?: SetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetScalarWhereInput], {
    nullable: true
  })
  OR?: SetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetScalarWhereInput], {
    nullable: true
  })
  NOT?: SetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reps?: IntFilter | undefined;

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
