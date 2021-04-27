import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordCreateManyExerciseInputEnvelope } from "../inputs/ExerciseRecordCreateManyExerciseInputEnvelope";
import { ExerciseRecordCreateOrConnectWithoutExerciseInput } from "../inputs/ExerciseRecordCreateOrConnectWithoutExerciseInput";
import { ExerciseRecordCreateWithoutExerciseInput } from "../inputs/ExerciseRecordCreateWithoutExerciseInput";
import { ExerciseRecordScalarWhereInput } from "../inputs/ExerciseRecordScalarWhereInput";
import { ExerciseRecordUpdateManyWithWhereWithoutExerciseInput } from "../inputs/ExerciseRecordUpdateManyWithWhereWithoutExerciseInput";
import { ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput } from "../inputs/ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput";
import { ExerciseRecordUpsertWithWhereUniqueWithoutExerciseInput } from "../inputs/ExerciseRecordUpsertWithWhereUniqueWithoutExerciseInput";
import { ExerciseRecordWhereUniqueInput } from "../inputs/ExerciseRecordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordUpdateManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [ExerciseRecordCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: ExerciseRecordCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: ExerciseRecordCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordUpsertWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseRecordCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: ExerciseRecordCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordWhereUniqueInput], {
    nullable: true
  })
  connect?: ExerciseRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordWhereUniqueInput], {
    nullable: true
  })
  set?: ExerciseRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExerciseRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordWhereUniqueInput], {
    nullable: true
  })
  delete?: ExerciseRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  update?: ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordUpdateManyWithWhereWithoutExerciseInput], {
    nullable: true
  })
  updateMany?: ExerciseRecordUpdateManyWithWhereWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseRecordScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExerciseRecordScalarWhereInput[] | undefined;
}
