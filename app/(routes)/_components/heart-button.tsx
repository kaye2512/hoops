import Heart from "@/components/icons/heart";

export default function HeartButton() {
  /* logic pour faire fonctionner le heart boutton ici
   TO DO: afficher le nombre de produit liké, faire un call to action qui renvera vers la page des favoris
  */
  return (
    <div className="cursor-pointer">
      <Heart size={180} />
    </div>
  );
}
