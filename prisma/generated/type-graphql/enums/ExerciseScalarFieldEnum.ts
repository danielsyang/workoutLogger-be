import * as TypeGraphQL from "type-graphql";

export enum ExerciseScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  workoutId = "workoutId"
}
TypeGraphQL.registerEnumType(ExerciseScalarFieldEnum, {
  name: "ExerciseScalarFieldEnum",
  description: undefined,
});
