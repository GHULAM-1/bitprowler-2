"use client";
import { useTogglingStore } from "@/stores/togglingStore";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { redirect } from "next/navigation";

export default function StudioPage() {
  const isTeamMember = useTogglingStore((state) => state.isTeamMember);
  if (isTeamMember) {
    return <NextStudio config={config} />;
  } else {
    redirect("/teamauth");
  }
}
