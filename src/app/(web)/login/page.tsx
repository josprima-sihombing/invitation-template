import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LoginButton from "./login-button";

export default async function Page() {
  const supabase = await createClient();

  const { data: dataUser } = await supabase.auth.getUser();

  if (dataUser.user) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-gray-100 h-full grid place-items-center">
      <div className="bg-white max-w-[300px] px-4 pt-8 pb-4 rounded-md">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <p className="text-gray-700 mb-4">
          Silahkan login menggunakan google account yang sudah kamu berikan ke
          kreasi-invitation
        </p>

        <LoginButton />
      </div>
    </div>
  );
}
