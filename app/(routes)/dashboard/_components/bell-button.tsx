import Notif from "@/components/icons/notif";

export default function BellButton() {
  /* logic pour faire fonctionner le bell boutton ici
   TO DO: afficher le nombre de notification dans le bell, en rouge créer une page de notifications
  */
  return (
    <Notif
      size={90}
      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-6 cursor-pointer"
    />
  );
}
