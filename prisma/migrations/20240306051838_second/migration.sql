/*
  Warnings:

  - Made the column `walletAddress` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "walletAddress" SET NOT NULL,
ALTER COLUMN "walletAddress" SET DATA TYPE TEXT;
