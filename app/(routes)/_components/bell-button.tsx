import Notif from "@/components/icons/notif";

export default function BellButton() {
  /* logic pour faire fonctionner le bell boutton ici
   TO DO: afficher le nombre de notification dans le bell, en rouge créer une page de notifications
  */
  return (
    <div className="cursor-pointer">
      <Notif size={200} />
    </div>
  );
}
