import { NextResponse } from 'next/server';
import { readJson, writeJson, makeRef } from '@/lib/storage';

export async function POST(req: Request) {
  const body = await req.json();
  const applications = readJson<any[]>('membership-applications.json', []);
  const reference = makeRef('FHBF-APP');
  const record = {
    id: reference,
    reference,
    status: 'SUBMITTED',
    submittedAt: new Date().toISOString(),
    ...body
  };
  applications.push(record);
  writeJson('membership-applications.json', applications);
  return NextResponse.json(record);
}
