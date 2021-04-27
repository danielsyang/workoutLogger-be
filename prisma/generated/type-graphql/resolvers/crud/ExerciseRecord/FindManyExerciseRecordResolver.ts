import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyExerciseRecordArgs } from "./args/FindManyExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class FindManyExerciseRecordResolver {
  @TypeGraphQL.Query(_returns => [ExerciseRecord], {
    nullable: false
  })
  async exerciseRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExerciseRecordArgs): Promise<ExerciseRecord[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).exerciseRecord.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
