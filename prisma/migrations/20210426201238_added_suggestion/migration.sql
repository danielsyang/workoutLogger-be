/*
  Warnings:

  - You are about to drop the column `setSuggestion` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `suggestion` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "setSuggestion",
ADD COLUMN     "suggestion" TEXT NOT NULL;
