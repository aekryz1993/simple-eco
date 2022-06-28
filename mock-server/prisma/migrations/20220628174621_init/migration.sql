-- CreateEnum
CREATE TYPE "Size" AS ENUM ('S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SELLER', 'CONSUMER');

-- CreateTable
CREATE TABLE "FashionNewsItem" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "FashionNewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "full_description" TEXT NOT NULL,
    "main_image" TEXT NOT NULL,
    "images_list" TEXT[],
    "Image" TEXT[],
    "size" "Size"[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderListItem" (
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "size" "Size" NOT NULL,
    "orderId" TEXT,

    CONSTRAINT "OrderListItem_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consumer" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "received" BOOLEAN NOT NULL DEFAULT false,
    "main_image" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" "Role"[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderListItem" ADD CONSTRAINT "OrderListItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
