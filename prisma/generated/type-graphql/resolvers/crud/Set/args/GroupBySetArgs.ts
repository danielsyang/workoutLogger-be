import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetOrderByInput } from "../../../inputs/SetOrderByInput";
import { SetScalarWhereWithAggregatesInput } from "../../../inputs/SetScalarWhereWithAggregatesInput";
import { SetWhereInput } from "../../../inputs/SetWhereInput";
import { SetScalarFieldEnum } from "../../../../enums/SetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySetArgs {
  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  where?: SetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SetOrderByInput], {
    nullable: true
  })
  orderBy?: SetOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [SetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "reps" | "createdAt" | "updatedAt" | "exerciseId" | "perception">;

  @TypeGraphQL.Field(_type => SetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
