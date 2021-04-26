import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutSetInput } from "../inputs/ExerciseCreateWithoutSetInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseCreateOrConnectWithoutSetInput {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutSetInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutSetInput;
}
