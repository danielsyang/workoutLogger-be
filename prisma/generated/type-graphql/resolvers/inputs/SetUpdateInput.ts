import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPerceptionFieldUpdateOperationsInput } from "../inputs/EnumPerceptionFieldUpdateOperationsInput";
import { ExerciseUpdateOneRequiredWithoutSetInput } from "../inputs/ExerciseUpdateOneRequiredWithoutSetInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SetUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  reps?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPerceptionFieldUpdateOperationsInput, {
    nullable: true
  })
  perception?: EnumPerceptionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseUpdateOneRequiredWithoutSetInput, {
    nullable: true
  })
  exercise?: ExerciseUpdateOneRequiredWithoutSetInput | undefined;
}
