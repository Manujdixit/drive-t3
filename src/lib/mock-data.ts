import type { DriveData } from "~/types/drive";

export const mockData: DriveData = {
  name: "root",
  type: "folder",
  items: [
    {
      id: "1",
      name: "Documents",
      type: "folder",
      items: [
        {
          id: "2",
          name: "Project Proposal.docx",
          type: "file",
          size: "2.3 MB",
          modified: "2023-05-15",
        },
        {
          id: "3",
          name: "Budget.xlsx",
          type: "file",
          size: "1.5 MB",
          modified: "2023-05-14",
        },
        {
          id: "4",
          name: "Resources",
          type: "folder",
          items: [
            {
              id: "5",
              name: "Image1.jpg",
              type: "file",
              size: "3.2 MB",
              modified: "2023-05-13",
            },
            {
              id: "6",
              name: "Image2.jpg",
              type: "file",
              size: "2.8 MB",
              modified: "2023-05-13",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      name: "Photos",
      type: "folder",
      items: [
        {
          id: "8",
          name: "Vacation.jpg",
          type: "file",
          size: "5.4 MB",
          modified: "2023-05-10",
        },
        {
          id: "9",
          name: "Family.jpg",
          type: "file",
          size: "4.2 MB",
          modified: "2023-05-09",
        },
      ],
    },
    {
      id: "10",
      name: "Todo List.txt",
      type: "file",
      size: "10 KB",
      modified: "2023-05-15",
    },
    {
      id: "11",
      name: "Project.zip",
      type: "file",
      size: "15.2 MB",
      modified: "2023-05-12",
    },
  ],
};
