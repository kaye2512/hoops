import Image from "next/image";
import loginImage from "@/public/images/taras-chernus--au3XMzfhro-unsplash.jpg";
import SignInForm from "./_component/sign-in-form";

export default function SignIn() {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex">
        <div className="relative w-1/2 h-screen hidden lg:block">
          <Image
            src={loginImage}
            alt="login"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
