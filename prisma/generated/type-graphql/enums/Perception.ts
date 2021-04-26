import * as TypeGraphQL from "type-graphql";

export enum Perception {
  GOOD = "GOOD",
  MEDIUM = "MEDIUM",
  BAD = "BAD"
}
TypeGraphQL.registerEnumType(Perception, {
  name: "Perception",
  description: undefined,
});
