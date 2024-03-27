import { NextResponse } from "next/server";
import { getResume } from "@/actions/getResume";
export async function GET(req: Request) {
  try {
    const resume = await getResume();

    if (!resume) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.json(resume);
  } catch (error) {
    console.log("[product_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
