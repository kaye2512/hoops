import GoogleIcon from "./icons/google-icon";
import { Button } from "./ui/button";

export default function GoogleSignInButton() {
  return (
    <Button variant="outline" className="h-12 flex gap-2 w-full">
      <GoogleIcon />
      Continue with Google
    </Button>
  );
}
