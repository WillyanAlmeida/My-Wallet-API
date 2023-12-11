-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "transactions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_userId_key" ON "transactions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
