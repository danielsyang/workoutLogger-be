import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteExerciseRecordArgs } from "./args/DeleteExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class DeleteExerciseRecordResolver {
  @TypeGraphQL.Mutation(_returns => ExerciseRecord, {
    nullable: true
  })
  async deleteExerciseRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteExerciseRecordArgs): Promise<ExerciseRecord | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).exerciseRecord.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
