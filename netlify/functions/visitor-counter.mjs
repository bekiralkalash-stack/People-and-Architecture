import { getDatabase } from '@netlify/database';

const headers = {
  'Cache-Control': 'no-store, max-age=0',
  'Content-Type': 'application/json; charset=utf-8'
};

export default async () => {
  try {
    const db = getDatabase();
    const rows = await db.sql`
      INSERT INTO visitor_counters (counter_key, visits)
      VALUES ('platform', 1249)
      ON CONFLICT (counter_key)
      DO UPDATE SET visits = visitor_counters.visits + 1, updated_at = NOW()
      RETURNING visits
    `;
    return new Response(JSON.stringify({ count: Number(rows[0].visits) }), { headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'visitor_counter_unavailable' }), {
      status: 503,
      headers
    });
  }
};
