import Image from "next/image";
import React from "react";

type PackagesCardProps = {
  name?: string;
  price?: string;
  description?: string;
  deliverablesCount?: string;
  bgImageDarkMode?: string;
  bgImageLightMode?: string;
};

export default function PackagesSectionCard({
  name,
  price,
  description,
  deliverablesCount,
  bgImageDarkMode,
  bgImageLightMode,
}: PackagesCardProps) {
  return (
    <div className="relative w-64 h-64 rounded-lg p-4 gradient-background  text-white">
      <div className="relative z-10 p-4">
        <h2 className="text-2xl font-semibold mb-2">sas </h2>
        <p className="text-sm">sasa</p>
        <p className="text-sm">slapsl</p>
        <p className="text-sm">sssssss</p>
      </div>
    </div>
  );
}
