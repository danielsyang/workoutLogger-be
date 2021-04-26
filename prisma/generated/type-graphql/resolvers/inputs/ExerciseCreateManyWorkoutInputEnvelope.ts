import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateManyWorkoutInput } from "../inputs/ExerciseCreateManyWorkoutInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateManyWorkoutInputEnvelope {
  @TypeGraphQL.Field(_type => [ExerciseCreateManyWorkoutInput], {
    nullable: false
  })
  data!: ExerciseCreateManyWorkoutInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
