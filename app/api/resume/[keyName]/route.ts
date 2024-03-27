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

    if (!(keyName in resume)) {
      return new NextResponse("Endpoint does not exist", { status: 404 });
    }

    const data = resume[keyName as keyof typeof resume];
    return NextResponse.json(data);
  } catch (error) {
    console.log("[product_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
