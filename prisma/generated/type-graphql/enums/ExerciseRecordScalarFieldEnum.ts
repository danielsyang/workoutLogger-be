import * as TypeGraphQL from "type-graphql";

export enum ExerciseRecordScalarFieldEnum {
  id = "id",
  reps = "reps",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  exerciseId = "exerciseId",
  perception = "perception"
}
TypeGraphQL.registerEnumType(ExerciseRecordScalarFieldEnum, {
  name: "ExerciseRecordScalarFieldEnum",
  description: undefined,
});
