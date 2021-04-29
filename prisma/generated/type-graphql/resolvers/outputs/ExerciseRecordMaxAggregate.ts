import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ExerciseRecordMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rpe!: number | null;

  @TypeGraphQL.Field(_type => Perception, {
    nullable: true
  })
  perception!: "GOOD" | "MEDIUM" | "BAD" | null;
}
