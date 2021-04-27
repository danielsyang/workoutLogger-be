import * as TypeGraphQL from "type-graphql";
import { Exercise } from "../../../models/Exercise";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExerciseRecord)
export class ExerciseRecordRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Exercise, {
    nullable: false
  })
  async exercise(@TypeGraphQL.Root() exerciseRecord: ExerciseRecord, @TypeGraphQL.Ctx() ctx: any): Promise<Exercise> {
    return getPrismaFromContext(ctx).exerciseRecord.findUnique({
      where: {
        id: exerciseRecord.id,
      },
    }).exercise({});
  }
}
