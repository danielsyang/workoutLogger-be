import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordCreateManyExerciseInputEnvelope } from "../inputs/ExerciseRecordCreateManyExerciseInputEnvelope";
import { ExerciseRecordCreateOrConnectWithoutExerciseInput } from "../inputs/ExerciseRecordCreateOrConnectWithoutExerciseInput";
import { ExerciseRecordCreateWithoutExerciseInput } from "../inputs/ExerciseRecordCreateWithoutExerciseInput";
import { ExerciseRecordWhereUniqueInput } from "../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordCreateNestedManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [ExerciseRecordCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: ExerciseRecordCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: ExerciseRecordCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseRecordCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: ExerciseRecordCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordWhereUniqueInput], {
    nullable: true
  })
  connect?: ExerciseRecordWhereUniqueInput[] | undefined;
}
