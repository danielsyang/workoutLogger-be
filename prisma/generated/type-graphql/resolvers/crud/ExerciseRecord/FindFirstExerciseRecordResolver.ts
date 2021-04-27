import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstExerciseRecordArgs } from "./args/FindFirstExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class FindFirstExerciseRecordResolver {
  @TypeGraphQL.Query(_returns => ExerciseRecord, {
    nullable: true
  })
  async findFirstExerciseRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExerciseRecordArgs): Promise<ExerciseRecord | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).exerciseRecord.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
