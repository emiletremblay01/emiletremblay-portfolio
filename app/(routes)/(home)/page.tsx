import { getTechnologies } from "@/actions/getTechnologies";
import ClientPage from "./components/ClientPage";

export default async function HomePage() {
  const technologies = await getTechnologies();

  return (
    <>
      <ClientPage technologies={technologies} />
    </>
  );
}
