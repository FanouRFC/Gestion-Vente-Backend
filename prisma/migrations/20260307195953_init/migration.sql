-- CreateTable
CREATE TABLE "Vente" (
    "numProduit" SERIAL NOT NULL,
    "design" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "quantite" INTEGER NOT NULL,

    CONSTRAINT "Vente_pkey" PRIMARY KEY ("numProduit")
);
