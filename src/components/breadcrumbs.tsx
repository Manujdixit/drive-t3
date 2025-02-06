import { ChevronRight, Home, Upload } from "lucide-react";
import { Button } from "~/components/ui/button";

interface BreadcrumbsProps {
  path: string[];
  onBreadcrumbClick: (index: number) => void;
}

export default function Breadcrumbs({
  path,
  onBreadcrumbClick,
}: BreadcrumbsProps) {
  return (
    <nav className="mb-4 flex justify-between" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
            onClick={() => onBreadcrumbClick(-1)}
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </li>
        {path.map((folder, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="h-5 w-5 text-gray-400" />
              <Button
                variant="ghost"
                size="sm"
                className="ml-1 text-sm font-medium text-gray-400 hover:text-white md:ml-2"
                onClick={() => onBreadcrumbClick(index)}
              >
                {folder}
              </Button>
            </div>
          </li>
        ))}
      </ol>
      <Button variant="secondary">
        <Upload />
        Upload
      </Button>
    </nav>
  );
}
