import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


interface Context {
  params: Promise<any>;
}

export async function POST(request: NextRequest, context: Context) {
  const body: { amount: number } = await request.json();
  const { amount = 1 } = body;

  
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ data: amount });
}
