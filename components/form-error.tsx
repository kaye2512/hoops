import { CircleX } from "lucide-react";
type FormErrorProps = {
  message?: string;
};
export default function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }
  return (
    <div className="flex space-x-4 items-center p-2 rounded-lg text-red-500 bg-red-500/30 text-sm">
      <CircleX className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
