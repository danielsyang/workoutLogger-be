import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCountAggregate } from "../outputs/ExerciseCountAggregate";
import { ExerciseMaxAggregate } from "../outputs/ExerciseMaxAggregate";
import { ExerciseMinAggregate } from "../outputs/ExerciseMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateExercise {
  @TypeGraphQL.Field(_type => ExerciseCountAggregate, {
    nullable: true
  })
  count!: ExerciseCountAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseMinAggregate, {
    nullable: true
  })
  min!: ExerciseMinAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseMaxAggregate, {
    nullable: true
  })
  max!: ExerciseMaxAggregate | null;
}
