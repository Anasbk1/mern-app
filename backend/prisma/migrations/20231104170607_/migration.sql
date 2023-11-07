/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Barber` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Barber_email_key` ON `Barber`(`email`);
