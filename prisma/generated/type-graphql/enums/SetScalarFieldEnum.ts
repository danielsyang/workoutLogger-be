import * as TypeGraphQL from "type-graphql";

export enum SetScalarFieldEnum {
  id = "id",
  reps = "reps",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  exerciseId = "exerciseId",
  perception = "perception"
}
TypeGraphQL.registerEnumType(SetScalarFieldEnum, {
  name: "SetScalarFieldEnum",
  description: undefined,
});
