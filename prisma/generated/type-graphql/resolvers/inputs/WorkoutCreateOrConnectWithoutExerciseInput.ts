import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateWithoutExerciseInput } from "../inputs/WorkoutCreateWithoutExerciseInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WorkoutCreateOrConnectWithoutExerciseInput {
  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkoutCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: WorkoutCreateWithoutExerciseInput;
}
