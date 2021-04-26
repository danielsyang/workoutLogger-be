import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Workout: crudResolvers.WorkoutCrudResolver,
  Exercise: crudResolvers.ExerciseCrudResolver,
  Set: crudResolvers.SetCrudResolver
};
const relationResolversMap = {
  Workout: relationResolvers.WorkoutRelationsResolver,
  Exercise: relationResolvers.ExerciseRelationsResolver,
  Set: relationResolvers.SetRelationsResolver
};
const actionResolversMap = {
  Workout: {
    workout: actionResolvers.FindUniqueWorkoutResolver,
    findFirstWorkout: actionResolvers.FindFirstWorkoutResolver,
    workouts: actionResolvers.FindManyWorkoutResolver,
    createWorkout: actionResolvers.CreateWorkoutResolver,
    createManyWorkout: actionResolvers.CreateManyWorkoutResolver,
    deleteWorkout: actionResolvers.DeleteWorkoutResolver,
    updateWorkout: actionResolvers.UpdateWorkoutResolver,
    deleteManyWorkout: actionResolvers.DeleteManyWorkoutResolver,
    updateManyWorkout: actionResolvers.UpdateManyWorkoutResolver,
    upsertWorkout: actionResolvers.UpsertWorkoutResolver,
    aggregateWorkout: actionResolvers.AggregateWorkoutResolver,
    groupByWorkout: actionResolvers.GroupByWorkoutResolver
  },
  Exercise: {
    exercise: actionResolvers.FindUniqueExerciseResolver,
    findFirstExercise: actionResolvers.FindFirstExerciseResolver,
    exercises: actionResolvers.FindManyExerciseResolver,
    createExercise: actionResolvers.CreateExerciseResolver,
    createManyExercise: actionResolvers.CreateManyExerciseResolver,
    deleteExercise: actionResolvers.DeleteExerciseResolver,
    updateExercise: actionResolvers.UpdateExerciseResolver,
    deleteManyExercise: actionResolvers.DeleteManyExerciseResolver,
    updateManyExercise: actionResolvers.UpdateManyExerciseResolver,
    upsertExercise: actionResolvers.UpsertExerciseResolver,
    aggregateExercise: actionResolvers.AggregateExerciseResolver,
    groupByExercise: actionResolvers.GroupByExerciseResolver
  },
  Set: {
    set: actionResolvers.FindUniqueSetResolver,
    findFirstSet: actionResolvers.FindFirstSetResolver,
    sets: actionResolvers.FindManySetResolver,
    createSet: actionResolvers.CreateSetResolver,
    createManySet: actionResolvers.CreateManySetResolver,
    deleteSet: actionResolvers.DeleteSetResolver,
    updateSet: actionResolvers.UpdateSetResolver,
    deleteManySet: actionResolvers.DeleteManySetResolver,
    updateManySet: actionResolvers.UpdateManySetResolver,
    upsertSet: actionResolvers.UpsertSetResolver,
    aggregateSet: actionResolvers.AggregateSetResolver,
    groupBySet: actionResolvers.GroupBySetResolver
  }
};
const resolversInfo = {
  Workout: ["workout", "findFirstWorkout", "workouts", "createWorkout", "createManyWorkout", "deleteWorkout", "updateWorkout", "deleteManyWorkout", "updateManyWorkout", "upsertWorkout", "aggregateWorkout", "groupByWorkout"],
  Exercise: ["exercise", "findFirstExercise", "exercises", "createExercise", "createManyExercise", "deleteExercise", "updateExercise", "deleteManyExercise", "updateManyExercise", "upsertExercise", "aggregateExercise", "groupByExercise"],
  Set: ["set", "findFirstSet", "sets", "createSet", "createManySet", "deleteSet", "updateSet", "deleteManySet", "updateManySet", "upsertSet", "aggregateSet", "groupBySet"]
};
const relationResolversInfo = {
  Workout: ["Exercise"],
  Exercise: ["workout", "Set"],
  Set: ["exercise"]
};
const modelsInfo = {
  Workout: ["id", "name", "createdAt", "updatedAt"],
  Exercise: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  Set: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"]
};
const inputsInfo = {
  WorkoutWhereInput: ["AND", "OR", "NOT", "id", "name", "Exercise", "createdAt", "updatedAt"],
  WorkoutOrderByInput: ["id", "name", "createdAt", "updatedAt"],
  WorkoutWhereUniqueInput: ["id"],
  WorkoutScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
  ExerciseWhereInput: ["AND", "OR", "NOT", "id", "name", "suggestion", "workout", "createdAt", "updatedAt", "workoutId", "Set"],
  ExerciseOrderByInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  ExerciseWhereUniqueInput: ["id"],
  ExerciseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  SetWhereInput: ["AND", "OR", "NOT", "id", "reps", "createdAt", "updatedAt", "exercise", "exerciseId", "perception"],
  SetOrderByInput: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"],
  SetWhereUniqueInput: ["id"],
  SetScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"],
  WorkoutCreateInput: ["id", "name", "createdAt", "updatedAt", "Exercise"],
  WorkoutUpdateInput: ["id", "name", "createdAt", "updatedAt", "Exercise"],
  WorkoutCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
  WorkoutUpdateManyMutationInput: ["id", "name", "createdAt", "updatedAt"],
  ExerciseCreateInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "workout", "Set"],
  ExerciseUpdateInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "workout", "Set"],
  ExerciseCreateManyInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  ExerciseUpdateManyMutationInput: ["id", "name", "suggestion", "createdAt", "updatedAt"],
  SetCreateInput: ["id", "reps", "createdAt", "updatedAt", "perception", "exercise"],
  SetUpdateInput: ["id", "reps", "createdAt", "updatedAt", "perception", "exercise"],
  SetCreateManyInput: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"],
  SetUpdateManyMutationInput: ["id", "reps", "createdAt", "updatedAt", "perception"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ExerciseListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  WorkoutRelationFilter: ["is", "isNot"],
  SetListRelationFilter: ["every", "some", "none"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ExerciseRelationFilter: ["is", "isNot"],
  EnumPerceptionFilter: ["equals", "in", "notIn", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  EnumPerceptionWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  ExerciseCreateNestedManyWithoutWorkoutInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ExerciseUpdateManyWithoutWorkoutInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  WorkoutCreateNestedOneWithoutExerciseInput: ["create", "connectOrCreate", "connect"],
  SetCreateNestedManyWithoutExerciseInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkoutUpdateOneRequiredWithoutExerciseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SetUpdateManyWithoutExerciseInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ExerciseCreateNestedOneWithoutSetInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumPerceptionFieldUpdateOperationsInput: ["set"],
  ExerciseUpdateOneRequiredWithoutSetInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  NestedEnumPerceptionFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumPerceptionWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  ExerciseCreateWithoutWorkoutInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "Set"],
  ExerciseCreateOrConnectWithoutWorkoutInput: ["where", "create"],
  ExerciseCreateManyWorkoutInputEnvelope: ["data", "skipDuplicates"],
  ExerciseUpsertWithWhereUniqueWithoutWorkoutInput: ["where", "update", "create"],
  ExerciseUpdateWithWhereUniqueWithoutWorkoutInput: ["where", "data"],
  ExerciseUpdateManyWithWhereWithoutWorkoutInput: ["where", "data"],
  ExerciseScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  WorkoutCreateWithoutExerciseInput: ["id", "name", "createdAt", "updatedAt"],
  WorkoutCreateOrConnectWithoutExerciseInput: ["where", "create"],
  SetCreateWithoutExerciseInput: ["id", "reps", "createdAt", "updatedAt", "perception"],
  SetCreateOrConnectWithoutExerciseInput: ["where", "create"],
  SetCreateManyExerciseInputEnvelope: ["data", "skipDuplicates"],
  WorkoutUpsertWithoutExerciseInput: ["update", "create"],
  WorkoutUpdateWithoutExerciseInput: ["id", "name", "createdAt", "updatedAt"],
  SetUpsertWithWhereUniqueWithoutExerciseInput: ["where", "update", "create"],
  SetUpdateWithWhereUniqueWithoutExerciseInput: ["where", "data"],
  SetUpdateManyWithWhereWithoutExerciseInput: ["where", "data"],
  SetScalarWhereInput: ["AND", "OR", "NOT", "id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"],
  ExerciseCreateWithoutSetInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "workout"],
  ExerciseCreateOrConnectWithoutSetInput: ["where", "create"],
  ExerciseUpsertWithoutSetInput: ["update", "create"],
  ExerciseUpdateWithoutSetInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "workout"],
  ExerciseCreateManyWorkoutInput: ["id", "name", "suggestion", "createdAt", "updatedAt"],
  ExerciseUpdateWithoutWorkoutInput: ["id", "name", "suggestion", "createdAt", "updatedAt", "Set"],
  SetCreateManyExerciseInput: ["id", "reps", "createdAt", "updatedAt", "perception"],
  SetUpdateWithoutExerciseInput: ["id", "reps", "createdAt", "updatedAt", "perception"]
};
const outputsInfo = {
  AggregateWorkout: ["count", "min", "max"],
  WorkoutGroupBy: ["id", "name", "createdAt", "updatedAt", "count", "min", "max"],
  AggregateExercise: ["count", "min", "max"],
  ExerciseGroupBy: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId", "count", "min", "max"],
  AggregateSet: ["count", "avg", "sum", "min", "max"],
  SetGroupBy: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception", "count", "avg", "sum", "min", "max"],
  AffectedRowsOutput: ["count"],
  WorkoutCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
  WorkoutMinAggregate: ["id", "name", "createdAt", "updatedAt"],
  WorkoutMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
  ExerciseCountAggregate: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId", "_all"],
  ExerciseMinAggregate: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  ExerciseMaxAggregate: ["id", "name", "suggestion", "createdAt", "updatedAt", "workoutId"],
  SetCountAggregate: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception", "_all"],
  SetAvgAggregate: ["reps"],
  SetSumAggregate: ["reps"],
  SetMinAggregate: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"],
  SetMaxAggregate: ["id", "reps", "createdAt", "updatedAt", "exerciseId", "perception"]
};
const argsInfo = {
  FindUniqueWorkoutArgs: ["where"],
  FindFirstWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateWorkoutArgs: ["data"],
  CreateManyWorkoutArgs: ["data", "skipDuplicates"],
  DeleteWorkoutArgs: ["where"],
  UpdateWorkoutArgs: ["data", "where"],
  DeleteManyWorkoutArgs: ["where"],
  UpdateManyWorkoutArgs: ["data", "where"],
  UpsertWorkoutArgs: ["where", "create", "update"],
  AggregateWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByWorkoutArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueExerciseArgs: ["where"],
  FindFirstExerciseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExerciseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateExerciseArgs: ["data"],
  CreateManyExerciseArgs: ["data", "skipDuplicates"],
  DeleteExerciseArgs: ["where"],
  UpdateExerciseArgs: ["data", "where"],
  DeleteManyExerciseArgs: ["where"],
  UpdateManyExerciseArgs: ["data", "where"],
  UpsertExerciseArgs: ["where", "create", "update"],
  AggregateExerciseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByExerciseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSetArgs: ["where"],
  FindFirstSetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSetArgs: ["data"],
  CreateManySetArgs: ["data", "skipDuplicates"],
  DeleteSetArgs: ["where"],
  UpdateSetArgs: ["data", "where"],
  DeleteManySetArgs: ["where"],
  UpdateManySetArgs: ["data", "where"],
  UpsertSetArgs: ["where", "create", "update"],
  AggregateSetArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySetArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







