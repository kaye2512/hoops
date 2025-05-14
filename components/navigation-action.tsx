import BellButton from "../../../../components/button/bell-button";
import BagButton from "../../../../components/button/bag-button";
import HeartButton from "../../../../components/button/heart-button";

/* ce fichier me servira peut-etre sinon supprimer, il a pour objectif de faire les actions notif, favoris et panier  */
export default function NavigationAction() {
  return (
    <>
      <div className="flex items-center gap-4">
        <BellButton />
        <HeartButton />
        <BagButton />
      </div>
    </>
  );
}
