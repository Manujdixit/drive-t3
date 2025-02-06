export interface DriveItem {
  id: string
  name: string
  type: "file" | "folder"
  size?: string
  modified?: string
  items?: DriveItem[]
}

export interface DriveData {
  name: string
  type: "folder"
  items: DriveItem[]
}

