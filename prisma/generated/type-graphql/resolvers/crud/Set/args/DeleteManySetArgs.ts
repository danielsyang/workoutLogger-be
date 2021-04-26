import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetWhereInput } from "../../../inputs/SetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySetArgs {
  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  where?: SetWhereInput | undefined;
}
