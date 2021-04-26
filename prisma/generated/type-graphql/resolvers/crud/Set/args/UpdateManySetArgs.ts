import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetUpdateManyMutationInput } from "../../../inputs/SetUpdateManyMutationInput";
import { SetWhereInput } from "../../../inputs/SetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySetArgs {
  @TypeGraphQL.Field(_type => SetUpdateManyMutationInput, {
    nullable: false
  })
  data!: SetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  where?: SetWhereInput | undefined;
}
