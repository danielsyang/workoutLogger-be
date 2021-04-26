import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutWorkoutInput } from "../inputs/ExerciseCreateWithoutWorkoutInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateOrConnectWithoutWorkoutInput {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutWorkoutInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutWorkoutInput;
}
