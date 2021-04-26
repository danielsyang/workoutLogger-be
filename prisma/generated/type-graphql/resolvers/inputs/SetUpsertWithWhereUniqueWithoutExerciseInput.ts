import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetCreateWithoutExerciseInput } from "../inputs/SetCreateWithoutExerciseInput";
import { SetUpdateWithoutExerciseInput } from "../inputs/SetUpdateWithoutExerciseInput";
import { SetWhereUniqueInput } from "../inputs/SetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetUpsertWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => SetWhereUniqueInput, {
    nullable: false
  })
  where!: SetWhereUniqueInput;

  @TypeGraphQL.Field(_type => SetUpdateWithoutExerciseInput, {
    nullable: false
  })
  update!: SetUpdateWithoutExerciseInput;

  @TypeGraphQL.Field(_type => SetCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: SetCreateWithoutExerciseInput;
}
