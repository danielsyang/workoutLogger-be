import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCountAggregate } from "../outputs/WorkoutCountAggregate";
import { WorkoutMaxAggregate } from "../outputs/WorkoutMaxAggregate";
import { WorkoutMinAggregate } from "../outputs/WorkoutMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class WorkoutGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => WorkoutCountAggregate, {
    nullable: true
  })
  count?: WorkoutCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkoutMinAggregate, {
    nullable: true
  })
  min?: WorkoutMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkoutMaxAggregate, {
    nullable: true
  })
  max?: WorkoutMaxAggregate | null;
}
