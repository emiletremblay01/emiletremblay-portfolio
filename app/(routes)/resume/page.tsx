import { getResume } from "@/actions/getResume";
import Resume from "./components/Resume";
import { Toaster } from "react-hot-toast";
export default async function ResumePage() {
  const resume = await getResume();
  if (!resume) {
    return <div>Not Found</div>;
  }

  return (
    <div className="bg-gray-50 py-4">
      <Resume resume={resume} />
      <Toaster />
    </div>
  );
}
