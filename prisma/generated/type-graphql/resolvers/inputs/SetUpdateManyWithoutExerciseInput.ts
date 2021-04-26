import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetCreateManyExerciseInputEnvelope } from "../inputs/SetCreateManyExerciseInputEnvelope";
import { SetCreateOrConnectWithoutExerciseInput } from "../inputs/SetCreateOrConnectWithoutExerciseInput";
import { SetCreateWithoutExerciseInput } from "../inputs/SetCreateWithoutExerciseInput";
import { SetScalarWhereInput } from "../inputs/SetScalarWhereInput";
import { SetUpdateManyWithWhereWithoutExerciseInput } from "../inputs/SetUpdateManyWithWhereWithoutExerciseInput";
import { SetUpdateWithWhereUniqueWithoutExerciseInput } from "../inputs/SetUpdateWithWhereUniqueWithoutExerciseInput";
import { SetUpsertWithWhereUniqueWithoutExerciseInput } from "../inputs/SetUpsertWithWhereUniqueWithoutExerciseInput";
import { SetWhereUniqueInput } from "../inputs/SetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetUpdateManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [SetCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: SetCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: SetCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetUpsertWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  upsert?: SetUpsertWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => SetCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: SetCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SetWhereUniqueInput], {
    nullable: true
  })
  connect?: SetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetWhereUniqueInput], {
    nullable: true
  })
  set?: SetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetWhereUniqueInput], {
    nullable: true
  })
  delete?: SetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetUpdateWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  update?: SetUpdateWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetUpdateManyWithWhereWithoutExerciseInput], {
    nullable: true
  })
  updateMany?: SetUpdateManyWithWhereWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SetScalarWhereInput[] | undefined;
}
