import BellButton from "./bell-button";
import BagButton from "./bag-button";
import HeartButton from "./heart-button";

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
