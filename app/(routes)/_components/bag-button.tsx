import Bag from "@/components/icons/bag";

export default function BagButton() {
  /* logic pour faire fonctionner le bag boutton ici
   TO DO: afficher le nombre de produit dans le panier, en rouge
  */
  return (
    <div className="cursor-pointer bg-slate-50 rounded-md ">
      <Bag size={120} />
    </div>
  );
}
