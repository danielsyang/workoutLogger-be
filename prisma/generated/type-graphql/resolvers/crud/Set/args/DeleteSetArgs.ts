import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetWhereUniqueInput } from "../../../inputs/SetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSetArgs {
  @TypeGraphQL.Field(_type => SetWhereUniqueInput, {
    nullable: false
  })
  where!: SetWhereUniqueInput;
}
