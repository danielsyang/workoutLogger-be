import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetCreateManyExerciseInputEnvelope } from "../inputs/SetCreateManyExerciseInputEnvelope";
import { SetCreateOrConnectWithoutExerciseInput } from "../inputs/SetCreateOrConnectWithoutExerciseInput";
import { SetCreateWithoutExerciseInput } from "../inputs/SetCreateWithoutExerciseInput";
import { SetWhereUniqueInput } from "../inputs/SetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetCreateNestedManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [SetCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: SetCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: SetCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => SetCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: SetCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SetWhereUniqueInput], {
    nullable: true
  })
  connect?: SetWhereUniqueInput[] | undefined;
}
