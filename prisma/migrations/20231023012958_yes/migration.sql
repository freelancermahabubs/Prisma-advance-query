/*
  Warnings:

  - You are about to alter the column `birtdDay` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `birtdDay` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
