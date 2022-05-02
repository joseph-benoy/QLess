/*
  Warnings:

  - Added the required column `date` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAccept` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAccept` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endAccept" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startAccept" TIMESTAMP(3) NOT NULL;
