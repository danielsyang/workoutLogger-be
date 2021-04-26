import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateOrConnectWithoutSetInput } from "../inputs/ExerciseCreateOrConnectWithoutSetInput";
import { ExerciseCreateWithoutSetInput } from "../inputs/ExerciseCreateWithoutSetInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateNestedOneWithoutSetInput {
  @TypeGraphQL.Field(_type => ExerciseCreateWithoutSetInput, {
    nullable: true
  })
  create?: ExerciseCreateWithoutSetInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateOrConnectWithoutSetInput, {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutSetInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput | undefined;
}
