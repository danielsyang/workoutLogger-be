import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseOrderByInput } from "../../../inputs/ExerciseOrderByInput";
import { ExerciseWhereInput } from "../../../inputs/ExerciseWhereInput";
import { ExerciseWhereUniqueInput } from "../../../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  where?: ExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExerciseOrderByInput], {
    nullable: true
  })
  orderBy?: ExerciseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExerciseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
