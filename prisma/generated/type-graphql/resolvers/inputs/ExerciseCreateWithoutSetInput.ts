import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateNestedOneWithoutExerciseInput } from "../inputs/WorkoutCreateNestedOneWithoutExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateWithoutSetInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  suggestion!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => WorkoutCreateNestedOneWithoutExerciseInput, {
    nullable: false
  })
  workout!: WorkoutCreateNestedOneWithoutExerciseInput;
}
