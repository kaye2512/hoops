import Bag from "@/components/icons/bag";

export default function BagButton() {
  /* logic pour faire fonctionner le bag boutton ici
   TO DO: afficher le nombre de produit dans le panier, en rouge
  */
  return (
    <div className="cursor-pointer bg-slate-50 rounded-md">
      <Bag
        size={60}
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-6"
      />
    </div>
  );
}
