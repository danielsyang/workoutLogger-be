import * as TypeGraphQL from "type-graphql";
import { Exercise } from "../../../models/Exercise";
import { Workout } from "../../../models/Workout";
import { WorkoutExerciseArgs } from "./args/WorkoutExerciseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workout)
export class WorkoutRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Exercise], {
    nullable: false
  })
  async Exercise(@TypeGraphQL.Root() workout: Workout, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WorkoutExerciseArgs): Promise<Exercise[]> {
    return getPrismaFromContext(ctx).workout.findUnique({
      where: {
        id: workout.id,
      },
    }).Exercise(args);
  }
}
