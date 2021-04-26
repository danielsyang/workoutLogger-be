import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumPerceptionFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPerceptionFilter, {
    nullable: true
  })
  not?: NestedEnumPerceptionFilter | undefined;
}
