/*
  Warnings:

  - You are about to drop the column `pricing` on the `barber` table. All the data in the column will be lost.
  - You are about to alter the column `service` on the `barber` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `barber` DROP COLUMN `pricing`,
    MODIFY `service` JSON NULL;
