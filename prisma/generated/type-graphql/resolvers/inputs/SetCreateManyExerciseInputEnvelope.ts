import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetCreateManyExerciseInput } from "../inputs/SetCreateManyExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetCreateManyExerciseInputEnvelope {
  @TypeGraphQL.Field(_type => [SetCreateManyExerciseInput], {
    nullable: false
  })
  data!: SetCreateManyExerciseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
