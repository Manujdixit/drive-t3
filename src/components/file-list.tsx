import { File, Folder } from "lucide-react";
import Link from "next/link";
import type { DriveItem } from "~/types/drive";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface FileListProps {
  items: DriveItem[];
  onFolderClick: (folderName: string) => void;
}

export default function FileList({ items, onFolderClick }: FileListProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.type === "folder" ? (
                  <Button
                    variant="ghost"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                    onClick={() => onFolderClick(item.name)}
                  >
                    <Folder className="mr-2 h-5 w-5" />
                    {item.name}
                  </Button>
                ) : (
                  <Button variant="ghost" asChild>
                    <Link
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <File className="mr-2 h-5 w-5" />
                      {item.name}
                    </Link>
                  </Button>
                )}
              </TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.size || "-"}</TableCell>
              <TableCell>{item.modified || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
