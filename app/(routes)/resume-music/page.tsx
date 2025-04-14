import Resume from "./components/ResumeMusic";
import { Toaster } from "react-hot-toast";
export default async function ResumePage() {
  return (
    <div className="bg-gray-50 py-4">
      <Resume />
      <Toaster />
    </div>
  );
}
