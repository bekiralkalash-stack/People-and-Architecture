CREATE TABLE IF NOT EXISTS visitor_counters (
  counter_key TEXT PRIMARY KEY,
  visits BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO visitor_counters (counter_key, visits)
VALUES ('platform', 1248)
ON CONFLICT (counter_key) DO NOTHING;
