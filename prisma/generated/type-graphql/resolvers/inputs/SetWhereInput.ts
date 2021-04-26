import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPerceptionFilter } from "../inputs/EnumPerceptionFilter";
import { ExerciseRelationFilter } from "../inputs/ExerciseRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetWhereInput {
  @TypeGraphQL.Field(_type => [SetWhereInput], {
    nullable: true
  })
  AND?: SetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetWhereInput], {
    nullable: true
  })
  OR?: SetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetWhereInput], {
    nullable: true
  })
  NOT?: SetWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ExerciseRelationFilter, {
    nullable: true
  })
  exercise?: ExerciseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  exerciseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPerceptionFilter, {
    nullable: true
  })
  perception?: EnumPerceptionFilter | undefined;
}
