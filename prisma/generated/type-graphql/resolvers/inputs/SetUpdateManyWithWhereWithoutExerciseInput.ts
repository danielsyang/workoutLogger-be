import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetScalarWhereInput } from "../inputs/SetScalarWhereInput";
import { SetUpdateManyMutationInput } from "../inputs/SetUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetUpdateManyWithWhereWithoutExerciseInput {
  @TypeGraphQL.Field(_type => SetScalarWhereInput, {
    nullable: false
  })
  where!: SetScalarWhereInput;

  @TypeGraphQL.Field(_type => SetUpdateManyMutationInput, {
    nullable: false
  })
  data!: SetUpdateManyMutationInput;
}
