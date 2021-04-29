import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordAvgAggregate } from "../outputs/ExerciseRecordAvgAggregate";
import { ExerciseRecordCountAggregate } from "../outputs/ExerciseRecordCountAggregate";
import { ExerciseRecordMaxAggregate } from "../outputs/ExerciseRecordMaxAggregate";
import { ExerciseRecordMinAggregate } from "../outputs/ExerciseRecordMinAggregate";
import { ExerciseRecordSumAggregate } from "../outputs/ExerciseRecordSumAggregate";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ExerciseRecordGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  reps?: number[] | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exerciseId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rpe!: number;

  @TypeGraphQL.Field(_type => Perception, {
    nullable: false
  })
  perception!: "GOOD" | "MEDIUM" | "BAD";

  @TypeGraphQL.Field(_type => ExerciseRecordCountAggregate, {
    nullable: true
  })
  count?: ExerciseRecordCountAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseRecordAvgAggregate, {
    nullable: true
  })
  avg?: ExerciseRecordAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseRecordSumAggregate, {
    nullable: true
  })
  sum?: ExerciseRecordSumAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseRecordMinAggregate, {
    nullable: true
  })
  min?: ExerciseRecordMinAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseRecordMaxAggregate, {
    nullable: true
  })
  max?: ExerciseRecordMaxAggregate | null;
}
