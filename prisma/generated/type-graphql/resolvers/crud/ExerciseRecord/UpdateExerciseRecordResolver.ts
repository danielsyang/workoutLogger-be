import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateExerciseRecordArgs } from "./args/UpdateExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class UpdateExerciseRecordResolver {
  @TypeGraphQL.Mutation(_returns => ExerciseRecord, {
    nullable: true
  })
  async updateExerciseRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateExerciseRecordArgs): Promise<ExerciseRecord | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).exerciseRecord.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
