import { LoaderCircle, LucideProps } from "lucide-react";

export default function Spinner({ ...props }: LucideProps) {
  return <LoaderCircle className="animate-spin" {...props} />;
}
