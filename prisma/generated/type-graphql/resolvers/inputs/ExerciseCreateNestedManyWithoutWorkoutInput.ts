import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateManyWorkoutInputEnvelope } from "../inputs/ExerciseCreateManyWorkoutInputEnvelope";
import { ExerciseCreateOrConnectWithoutWorkoutInput } from "../inputs/ExerciseCreateOrConnectWithoutWorkoutInput";
import { ExerciseCreateWithoutWorkoutInput } from "../inputs/ExerciseCreateWithoutWorkoutInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateNestedManyWithoutWorkoutInput {
  @TypeGraphQL.Field(_type => [ExerciseCreateWithoutWorkoutInput], {
    nullable: true
  })
  create?: ExerciseCreateWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseCreateOrConnectWithoutWorkoutInput], {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateManyWorkoutInputEnvelope, {
    nullable: true
  })
  createMany?: ExerciseCreateManyWorkoutInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput[] | undefined;
}
