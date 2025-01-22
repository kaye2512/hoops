import GitubIcon from "./icons/github-icon";

import { Button } from "./ui/button";

export default function GithubSignInButton() {
  return (
    <Button variant="outline" className="h-12 flex gap-2 w-full">
      <GitubIcon />
      Continue with Facebook
    </Button>
  );
}
