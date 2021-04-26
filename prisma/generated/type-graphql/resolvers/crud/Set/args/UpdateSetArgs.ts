import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetUpdateInput } from "../../../inputs/SetUpdateInput";
import { SetWhereUniqueInput } from "../../../inputs/SetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSetArgs {
  @TypeGraphQL.Field(_type => SetUpdateInput, {
    nullable: false
  })
  data!: SetUpdateInput;

  @TypeGraphQL.Field(_type => SetWhereUniqueInput, {
    nullable: false
  })
  where!: SetWhereUniqueInput;
}
