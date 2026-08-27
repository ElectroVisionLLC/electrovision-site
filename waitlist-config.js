// Public by design — this is the anon/publishable key, not a secret. Row
// Level Security (supabase/waitlist.sql) is what actually protects the data:
// this key can INSERT into the waitlist and nothing else.
const SUPABASE_URL = "https://gksoosaoucxtmbauwixp.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_EvxBNC0k_vg_uA26NV63zA_XzIqskJY";
