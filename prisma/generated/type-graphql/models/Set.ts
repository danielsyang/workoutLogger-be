import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exercise } from "../models/Exercise";
import { Perception } from "../enums/Perception";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Set {
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

  exercise?: Exercise;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exerciseId!: string;

  @TypeGraphQL.Field(_type => Perception, {
    nullable: false
  })
  perception!: "GOOD" | "MEDIUM" | "BAD";
}
