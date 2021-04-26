import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SetOrderByInput } from "../../../inputs/SetOrderByInput";
import { SetWhereInput } from "../../../inputs/SetWhereInput";
import { SetWhereUniqueInput } from "../../../inputs/SetWhereUniqueInput";
import { SetScalarFieldEnum } from "../../../../enums/SetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ExerciseSetArgs {
  @TypeGraphQL.Field(_type => SetWhereInput, {
    nullable: true
  })
  where?: SetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SetOrderByInput], {
    nullable: true
  })
  orderBy?: SetOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SetWhereUniqueInput, {
    nullable: true
  })
  cursor?: SetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SetScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "reps" | "createdAt" | "updatedAt" | "exerciseId" | "perception"> | undefined;
}
