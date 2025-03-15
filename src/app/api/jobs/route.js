import clientPromise from '../../../lib/mongodb';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db("jobsFinder");
    const items = await db.collection('jobs')
                          .find({})
                          .skip(skip)
                         .limit(limit)
                          .toArray();

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

