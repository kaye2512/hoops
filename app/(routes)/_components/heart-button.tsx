import Heart from "@/components/icons/heart";

export default function HeartButton() {
  /* logic pour faire fonctionner le heart boutton ici
   TO DO: afficher le nombre de produit liké, faire un call to action qui renvera vers la page des favoris
  */
  return (
    <div className="cursor-pointer">
      <Heart
        size={90}
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
      />
    </div>
  );
}
