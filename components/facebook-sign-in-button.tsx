import FacebookIcon from "./icons/facebook-icon";

import { Button } from "./ui/button";

export default function FacebookSignInButton() {
  return (
    <Button
      variant="outline"
      className="h-12 flex gap-2 w-full"
      onClick={() => {}}
    >
      <FacebookIcon />
      Continue with Facebook
    </Button>
  );
}
