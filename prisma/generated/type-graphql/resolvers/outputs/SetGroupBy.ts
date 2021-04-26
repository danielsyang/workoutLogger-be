import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetAvgAggregate } from "../outputs/SetAvgAggregate";
import { SetCountAggregate } from "../outputs/SetCountAggregate";
import { SetMaxAggregate } from "../outputs/SetMaxAggregate";
import { SetMinAggregate } from "../outputs/SetMinAggregate";
import { SetSumAggregate } from "../outputs/SetSumAggregate";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SetGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reps!: number;

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

  @TypeGraphQL.Field(_type => Perception, {
    nullable: false
  })
  perception!: "GOOD" | "MEDIUM" | "BAD";

  @TypeGraphQL.Field(_type => SetCountAggregate, {
    nullable: true
  })
  count?: SetCountAggregate | null;

  @TypeGraphQL.Field(_type => SetAvgAggregate, {
    nullable: true
  })
  avg?: SetAvgAggregate | null;

  @TypeGraphQL.Field(_type => SetSumAggregate, {
    nullable: true
  })
  sum?: SetSumAggregate | null;

  @TypeGraphQL.Field(_type => SetMinAggregate, {
    nullable: true
  })
  min?: SetMinAggregate | null;

  @TypeGraphQL.Field(_type => SetMaxAggregate, {
    nullable: true
  })
  max?: SetMaxAggregate | null;
}
