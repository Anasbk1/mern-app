/*
  Warnings:

  - Added the required column `phoneNumber` to the `Barber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `barber` ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL;
