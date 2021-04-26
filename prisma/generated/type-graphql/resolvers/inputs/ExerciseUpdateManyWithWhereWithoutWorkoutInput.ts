import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseScalarWhereInput } from "../inputs/ExerciseScalarWhereInput";
import { ExerciseUpdateManyMutationInput } from "../inputs/ExerciseUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseUpdateManyWithWhereWithoutWorkoutInput {
  @TypeGraphQL.Field(_type => ExerciseScalarWhereInput, {
    nullable: false
  })
  where!: ExerciseScalarWhereInput;

  @TypeGraphQL.Field(_type => ExerciseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExerciseUpdateManyMutationInput;
}
