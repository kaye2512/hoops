import BagButton from "./button/bag-button";
import BellButton from "./button/bell-button";
import HeartButton from "./button/heart-button";

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
