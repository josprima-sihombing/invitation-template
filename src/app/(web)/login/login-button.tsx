"use client";

import GoogleIcon from "@/components/icons/google";
import { supabase } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export default function LoginButton() {
  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };

  return (
    <Button
      onClick={handleLogin}
      leftSection={<GoogleIcon />}
      variant="outline"
    >
      Login with google
    </Button>
  );
}
