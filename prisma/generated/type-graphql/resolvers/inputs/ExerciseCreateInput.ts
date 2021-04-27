import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordCreateNestedManyWithoutExerciseInput } from "../inputs/ExerciseRecordCreateNestedManyWithoutExerciseInput";
import { WorkoutCreateNestedOneWithoutExerciseInput } from "../inputs/WorkoutCreateNestedOneWithoutExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sets!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reps!: number;

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

  @TypeGraphQL.Field(_type => ExerciseRecordCreateNestedManyWithoutExerciseInput, {
    nullable: true
  })
  Set?: ExerciseRecordCreateNestedManyWithoutExerciseInput | undefined;
}
