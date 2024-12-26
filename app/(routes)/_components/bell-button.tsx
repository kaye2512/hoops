import Notif from "@/components/icons/notif";

export default function BellButton() {
  /* logic pour faire fonctionner le bell boutton ici
   TO DO: afficher le nombre de notification dans le bell, en rouge créer une page de notifications
  */
  return (
    <div className="cursor-pointer">
      <Notif
        size={90}
        className="max-md:w-6 max-md:h-6 max-sm:w-8 max-sm:h-8"
      />
    </div>
  );
}
