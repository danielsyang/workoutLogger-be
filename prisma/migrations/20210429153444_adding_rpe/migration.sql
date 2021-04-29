/*
  Warnings:

  - Added the required column `rpe` to the `ExerciseRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExerciseRecord" ADD COLUMN     "rpe" INTEGER NOT NULL;
