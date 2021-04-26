import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPerceptionFilter } from "../inputs/NestedEnumPerceptionFilter";
import { NestedEnumPerceptionWithAggregatesFilter } from "../inputs/NestedEnumPerceptionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumPerceptionWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Perception, {
    nullable: true
  })
  equals?: "GOOD" | "MEDIUM" | "BAD" | undefined;

  @TypeGraphQL.Field(_type => [Perception], {
    nullable: true
  })
  in?: Array<"GOOD" | "MEDIUM" | "BAD"> | undefined;

  @TypeGraphQL.Field(_type => [Perception], {
    nullable: true
  })
  notIn?: Array<"GOOD" | "MEDIUM" | "BAD"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPerceptionWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPerceptionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPerceptionFilter, {
    nullable: true
  })
  min?: NestedEnumPerceptionFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPerceptionFilter, {
    nullable: true
  })
  max?: NestedEnumPerceptionFilter | undefined;
}
