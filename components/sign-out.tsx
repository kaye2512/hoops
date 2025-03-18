import { Button } from "./ui/button";

export default function SignOut() {
  const handleSignOut = async () => {};
  return (
    <Button variant={"destructive"} onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
