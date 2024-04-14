import { NextResponse } from "next/server";
import { getResume } from "@/actions/getResume";
export async function GET(
  req: Request,
  { params }: { params: { keyName: string } },
) {
  try {
    const { keyName } = params;

    const resume = await getResume();
    if (!keyName) {
      return new NextResponse("Missing keyName", { status: 400 });
    }

    if (!resume) {
      return new NextResponse("Not Found", { status: 404 });
    }

    switch (keyName) {
      case "about":
        const { name, birthDate, location, phone, email, summary } = resume;
        return NextResponse.json({
          name,
          birthDate,
          location,
          phone,
          email,
          summary,
        });

      case "skills":
        return NextResponse.json(resume.skills);
      case "work-experience":
        return NextResponse.json(resume.workExperience);
      case "education":
        return NextResponse.json(resume.education);
      case "interests":
        return NextResponse.json(resume.interests);
      default:
        return new NextResponse("Not Found", { status: 404 });
    }
  } catch (error) {
    console.log("[product_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
