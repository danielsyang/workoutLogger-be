import * as TypeGraphQL from "type-graphql";
import { Exercise } from "../../../models/Exercise";
import { Set } from "../../../models/Set";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Set)
export class SetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Exercise, {
    nullable: false
  })
  async exercise(@TypeGraphQL.Root() set: Set, @TypeGraphQL.Ctx() ctx: any): Promise<Exercise> {
    return getPrismaFromContext(ctx).set.findUnique({
      where: {
        id: set.id,
      },
    }).exercise({});
  }
}
