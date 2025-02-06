"use client";

import { useState } from "react";
import Breadcrumbs from "./breadcrumbs";
import FileList from "./file-list";
import { mockData } from "~/lib/mock-data";
import type { DriveItem } from "~/types/drive";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";

export default function DriveUI() {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getCurrentFolder = () => {
    let current: DriveItem = { ...mockData };
    for (const folder of currentPath) {
      current =
        current.items?.find(
          (item) => item.name === folder && item.type === "folder",
        ) || current;
    }
    return current;
  };

  const handleFolderClick = (folderName: string) => {
    setCurrentPath([...currentPath, folderName]);
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath(currentPath.slice(0, index));
  };

  const currentFolder = getCurrentFolder();

  const filteredItems =
    currentFolder.items?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="Search files and folders"
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Breadcrumbs
        path={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
      />
      <FileList items={filteredItems} onFolderClick={handleFolderClick} />
    </div>
  );
}
