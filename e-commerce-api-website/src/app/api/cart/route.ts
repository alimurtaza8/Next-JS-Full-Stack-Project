import { NextRequest, NextResponse } from 'next/server';

export type CartItem = {
  productId: number;
  quantity: number;
};

export async function POST(request: NextRequest) {
  const data = await request.json();
  // In a real application, you would save this to a database
  return NextResponse.json({ success: true, data });
}