import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateOrConnectWithoutExerciseInput } from "../inputs/WorkoutCreateOrConnectWithoutExerciseInput";
import { WorkoutCreateWithoutExerciseInput } from "../inputs/WorkoutCreateWithoutExerciseInput";
import { WorkoutUpdateWithoutExerciseInput } from "../inputs/WorkoutUpdateWithoutExerciseInput";
import { WorkoutUpsertWithoutExerciseInput } from "../inputs/WorkoutUpsertWithoutExerciseInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WorkoutUpdateOneRequiredWithoutExerciseInput {
  @TypeGraphQL.Field(_type => WorkoutCreateWithoutExerciseInput, {
    nullable: true
  })
  create?: WorkoutCreateWithoutExerciseInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutCreateOrConnectWithoutExerciseInput, {
    nullable: true
  })
  connectOrCreate?: WorkoutCreateOrConnectWithoutExerciseInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutUpsertWithoutExerciseInput, {
    nullable: true
  })
  upsert?: WorkoutUpsertWithoutExerciseInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkoutWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutUpdateWithoutExerciseInput, {
    nullable: true
  })
  update?: WorkoutUpdateWithoutExerciseInput | undefined;
}
