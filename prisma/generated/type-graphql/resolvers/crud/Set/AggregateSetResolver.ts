import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSetArgs } from "./args/AggregateSetArgs";
import { Set } from "../../../models/Set";
import { AggregateSet } from "../../outputs/AggregateSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Set)
export class AggregateSetResolver {
  @TypeGraphQL.Query(_returns => AggregateSet, {
    nullable: false
  })
  async aggregateSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSetArgs): Promise<AggregateSet> {
    return getPrismaFromContext(ctx).set.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
