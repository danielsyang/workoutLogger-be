import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateNestedOneWithoutSetInput } from "../inputs/ExerciseCreateNestedOneWithoutSetInput";
import { ExerciseRecordCreaterepsInput } from "../inputs/ExerciseRecordCreaterepsInput";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Perception, {
    nullable: false
  })
  perception!: "GOOD" | "MEDIUM" | "BAD";

  @TypeGraphQL.Field(_type => ExerciseRecordCreaterepsInput, {
    nullable: true
  })
  reps?: ExerciseRecordCreaterepsInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateNestedOneWithoutSetInput, {
    nullable: false
  })
  exercise!: ExerciseCreateNestedOneWithoutSetInput;
}
