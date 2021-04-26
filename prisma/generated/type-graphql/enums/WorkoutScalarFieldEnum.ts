import * as TypeGraphQL from "type-graphql";

export enum WorkoutScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(WorkoutScalarFieldEnum, {
  name: "WorkoutScalarFieldEnum",
  description: undefined,
});
