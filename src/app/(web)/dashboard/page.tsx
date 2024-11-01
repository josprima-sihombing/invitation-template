import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./logout-button";
import { redirect } from "next/navigation";
import RSVPTable from "./table";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    redirect("/login");
  }

  const { data: websiteData } = await supabase
    .from("website")
    .select()
    .eq("user_id", userData.user.id);

  if (!websiteData?.length) {
    redirect("/");
  }

  const { data: rsvpData } = await supabase
    .from("rsvp")
    .select("*")
    .eq("website_id", websiteData[0].id);

  return (
    <div className="max-w-screen-lg mx-auto pt-8 px-4">
      <div className="flex items-center justify-between gap-4 border-b border-b-gray-200 py-2 mb-8">
        <h1 className="text-xl font-bold">Daftar RSVP</h1>

        <LogoutButton />
      </div>

      <RSVPTable data={rsvpData || []} />
    </div>
  );
}
