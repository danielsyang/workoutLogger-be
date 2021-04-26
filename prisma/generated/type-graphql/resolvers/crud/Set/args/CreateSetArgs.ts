import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetCreateInput } from "../../../inputs/SetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSetArgs {
  @TypeGraphQL.Field(_type => SetCreateInput, {
    nullable: false
  })
  data!: SetCreateInput;
}
