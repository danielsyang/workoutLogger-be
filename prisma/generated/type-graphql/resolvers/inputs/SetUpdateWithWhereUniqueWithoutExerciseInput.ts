import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetUpdateWithoutExerciseInput } from "../inputs/SetUpdateWithoutExerciseInput";
import { SetWhereUniqueInput } from "../inputs/SetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetUpdateWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => SetWhereUniqueInput, {
    nullable: false
  })
  where!: SetWhereUniqueInput;

  @TypeGraphQL.Field(_type => SetUpdateWithoutExerciseInput, {
    nullable: false
  })
  data!: SetUpdateWithoutExerciseInput;
}
