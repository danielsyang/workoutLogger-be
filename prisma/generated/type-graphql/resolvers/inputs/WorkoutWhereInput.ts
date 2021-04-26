import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExerciseListRelationFilter } from "../inputs/ExerciseListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WorkoutWhereInput {
  @TypeGraphQL.Field(_type => [WorkoutWhereInput], {
    nullable: true
  })
  AND?: WorkoutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereInput], {
    nullable: true
  })
  OR?: WorkoutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereInput], {
    nullable: true
  })
  NOT?: WorkoutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExerciseListRelationFilter, {
    nullable: true
  })
  Exercise?: ExerciseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
