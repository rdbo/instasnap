import { LoaderCircle, LucideProps } from "lucide-react";

export default function Spinner({ className, ...props }: LucideProps) {
  return <LoaderCircle className={`animate-spin ${className}`} {...props} />;
}
