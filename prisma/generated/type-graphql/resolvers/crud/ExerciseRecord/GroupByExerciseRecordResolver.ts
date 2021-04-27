import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByExerciseRecordArgs } from "./args/GroupByExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { ExerciseRecordGroupBy } from "../../outputs/ExerciseRecordGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class GroupByExerciseRecordResolver {
  @TypeGraphQL.Query(_returns => [ExerciseRecordGroupBy], {
    nullable: false
  })
  async groupByExerciseRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExerciseRecordArgs): Promise<ExerciseRecordGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).exerciseRecord.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
