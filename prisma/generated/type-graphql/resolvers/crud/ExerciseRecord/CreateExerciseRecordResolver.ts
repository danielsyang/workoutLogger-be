import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateExerciseRecordArgs } from "./args/CreateExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class CreateExerciseRecordResolver {
  @TypeGraphQL.Mutation(_returns => ExerciseRecord, {
    nullable: false
  })
  async createExerciseRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateExerciseRecordArgs): Promise<ExerciseRecord> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).exerciseRecord.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
