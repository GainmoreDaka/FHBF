import { NextResponse } from 'next/server';
import { readJson, writeJson, makeRef } from '@/lib/storage';

export async function POST(req: Request) {
  const body = await req.json();
  const bookings = readJson<any[]>('village-bookings.json', []);
  const reference = makeRef('FHBF-VILLAGE');
  const record = {
    id: reference,
    reference,
    status: 'SUBMITTED',
    paymentStatus: 'UNDER_REVIEW',
    submittedAt: new Date().toISOString(),
    ...body
  };
  bookings.push(record);
  writeJson('village-bookings.json', bookings);
  return NextResponse.json(record);
}
