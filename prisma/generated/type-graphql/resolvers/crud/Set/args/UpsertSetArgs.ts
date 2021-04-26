import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetCreateInput } from "../../../inputs/SetCreateInput";
import { SetUpdateInput } from "../../../inputs/SetUpdateInput";
import { SetWhereUniqueInput } from "../../../inputs/SetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSetArgs {
  @TypeGraphQL.Field(_type => SetWhereUniqueInput, {
    nullable: false
  })
  where!: SetWhereUniqueInput;

  @TypeGraphQL.Field(_type => SetCreateInput, {
    nullable: false
  })
  create!: SetCreateInput;

  @TypeGraphQL.Field(_type => SetUpdateInput, {
    nullable: false
  })
  update!: SetUpdateInput;
}
