/*
  Warnings:

  - Changed the type of `endAccept` on the `Events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `startAccept` on the `Events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "endAccept",
ADD COLUMN     "endAccept" INTEGER NOT NULL,
DROP COLUMN "startAccept",
ADD COLUMN     "startAccept" INTEGER NOT NULL;
