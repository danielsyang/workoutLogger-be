import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWorkoutArgs } from "./args/AggregateWorkoutArgs";
import { Workout } from "../../../models/Workout";
import { AggregateWorkout } from "../../outputs/AggregateWorkout";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workout)
export class AggregateWorkoutResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkout, {
    nullable: false
  })
  async aggregateWorkout(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkoutArgs): Promise<AggregateWorkout> {
    return getPrismaFromContext(ctx).workout.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
