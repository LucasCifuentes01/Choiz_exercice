import { getApiTransport } from '@/settings/transport';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const url = 'https://679938bebe2191d708b25ceb.mockapi.io/api/faqs';

  const response = await getApiTransport().get(url);

  return NextResponse.json({ faqs: response.data });
};
