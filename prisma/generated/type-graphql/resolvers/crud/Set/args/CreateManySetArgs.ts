import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetCreateManyInput } from "../../../inputs/SetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySetArgs {
  @TypeGraphQL.Field(_type => [SetCreateManyInput], {
    nullable: false
  })
  data!: SetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
