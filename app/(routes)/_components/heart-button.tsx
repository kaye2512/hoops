import Heart from "@/components/icons/heart";

export default function HeartButton() {
  /* logic pour faire fonctionner le heart boutton ici
   TO DO: afficher le nombre de produit liké, faire un call to action qui renvera vers la page des favoris
  */
  return (
    <div className="cursor-pointer">
      <Heart
        size={90}
        className=" max-md:w-6 max-md:h-6 max-sm:w-8 max-sm:h-8"
      />
    </div>
  );
}
