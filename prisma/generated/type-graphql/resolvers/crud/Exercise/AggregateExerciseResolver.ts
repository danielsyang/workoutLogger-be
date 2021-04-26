import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateExerciseArgs } from "./args/AggregateExerciseArgs";
import { Exercise } from "../../../models/Exercise";
import { AggregateExercise } from "../../outputs/AggregateExercise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Exercise)
export class AggregateExerciseResolver {
  @TypeGraphQL.Query(_returns => AggregateExercise, {
    nullable: false
  })
  async aggregateExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExerciseArgs): Promise<AggregateExercise> {
    return getPrismaFromContext(ctx).exercise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
