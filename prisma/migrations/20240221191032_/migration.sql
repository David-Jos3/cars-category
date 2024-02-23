/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `categorys` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categorys_name_key" ON "categorys"("name");
