import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutSetInput } from "../inputs/ExerciseCreateWithoutSetInput";
import { ExerciseUpdateWithoutSetInput } from "../inputs/ExerciseUpdateWithoutSetInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseUpsertWithoutSetInput {
  @TypeGraphQL.Field(_type => ExerciseUpdateWithoutSetInput, {
    nullable: false
  })
  update!: ExerciseUpdateWithoutSetInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutSetInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutSetInput;
}
