import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateManyWorkoutInputEnvelope } from "../inputs/ExerciseCreateManyWorkoutInputEnvelope";
import { ExerciseCreateOrConnectWithoutWorkoutInput } from "../inputs/ExerciseCreateOrConnectWithoutWorkoutInput";
import { ExerciseCreateWithoutWorkoutInput } from "../inputs/ExerciseCreateWithoutWorkoutInput";
import { ExerciseScalarWhereInput } from "../inputs/ExerciseScalarWhereInput";
import { ExerciseUpdateManyWithWhereWithoutWorkoutInput } from "../inputs/ExerciseUpdateManyWithWhereWithoutWorkoutInput";
import { ExerciseUpdateWithWhereUniqueWithoutWorkoutInput } from "../inputs/ExerciseUpdateWithWhereUniqueWithoutWorkoutInput";
import { ExerciseUpsertWithWhereUniqueWithoutWorkoutInput } from "../inputs/ExerciseUpsertWithWhereUniqueWithoutWorkoutInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseUpdateManyWithoutWorkoutInput {
  @TypeGraphQL.Field(_type => [ExerciseCreateWithoutWorkoutInput], {
    nullable: true
  })
  create?: ExerciseCreateWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseCreateOrConnectWithoutWorkoutInput], {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseUpsertWithWhereUniqueWithoutWorkoutInput], {
    nullable: true
  })
  upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateManyWorkoutInputEnvelope, {
    nullable: true
  })
  createMany?: ExerciseCreateManyWorkoutInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  set?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  delete?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseUpdateWithWhereUniqueWithoutWorkoutInput], {
    nullable: true
  })
  update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseUpdateManyWithWhereWithoutWorkoutInput], {
    nullable: true
  })
  updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExerciseScalarWhereInput[] | undefined;
}
