import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateExerciseRecordArgs } from "./args/AggregateExerciseRecordArgs";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { AggregateExerciseRecord } from "../../outputs/AggregateExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class AggregateExerciseRecordResolver {
  @TypeGraphQL.Query(_returns => AggregateExerciseRecord, {
    nullable: false
  })
  async aggregateExerciseRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExerciseRecordArgs): Promise<AggregateExerciseRecord> {
    return getPrismaFromContext(ctx).exerciseRecord.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
