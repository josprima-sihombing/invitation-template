"use client";

import { supabase } from "@/utils/supabase/client";

export default function Page() {
  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with google</button>
    </div>
  );
}
