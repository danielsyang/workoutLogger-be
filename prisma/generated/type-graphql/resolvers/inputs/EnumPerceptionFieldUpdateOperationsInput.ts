import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumPerceptionFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Perception, {
    nullable: true
  })
  set?: "GOOD" | "MEDIUM" | "BAD" | undefined;
}
