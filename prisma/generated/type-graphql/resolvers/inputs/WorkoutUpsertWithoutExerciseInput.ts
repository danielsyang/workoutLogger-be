import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateWithoutExerciseInput } from "../inputs/WorkoutCreateWithoutExerciseInput";
import { WorkoutUpdateWithoutExerciseInput } from "../inputs/WorkoutUpdateWithoutExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WorkoutUpsertWithoutExerciseInput {
  @TypeGraphQL.Field(_type => WorkoutUpdateWithoutExerciseInput, {
    nullable: false
  })
  update!: WorkoutUpdateWithoutExerciseInput;

  @TypeGraphQL.Field(_type => WorkoutCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: WorkoutCreateWithoutExerciseInput;
}
