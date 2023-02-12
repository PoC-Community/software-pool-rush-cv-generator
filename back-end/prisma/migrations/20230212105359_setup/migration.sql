-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Cv" (
    "uuid" TEXT NOT NULL,
    "uuidUser" TEXT NOT NULL,
    "templateName" TEXT NOT NULL,
    "information" JSONB NOT NULL,

    CONSTRAINT "Cv_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cv_uuid_key" ON "Cv"("uuid");

-- AddForeignKey
ALTER TABLE "Cv" ADD CONSTRAINT "Cv_uuidUser_fkey" FOREIGN KEY ("uuidUser") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
