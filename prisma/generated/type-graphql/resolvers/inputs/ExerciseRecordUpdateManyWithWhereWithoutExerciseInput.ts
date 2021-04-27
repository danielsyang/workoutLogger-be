import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordScalarWhereInput } from "../inputs/ExerciseRecordScalarWhereInput";
import { ExerciseRecordUpdateManyMutationInput } from "../inputs/ExerciseRecordUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordUpdateManyWithWhereWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExerciseRecordScalarWhereInput, {
    nullable: false
  })
  where!: ExerciseRecordScalarWhereInput;

  @TypeGraphQL.Field(_type => ExerciseRecordUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExerciseRecordUpdateManyMutationInput;
}
