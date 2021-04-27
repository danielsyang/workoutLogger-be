/*
  Warnings:

  - You are about to drop the column `suggestion` on the `Exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "suggestion",
ADD COLUMN     "sets" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "reps" INTEGER NOT NULL DEFAULT 0;
