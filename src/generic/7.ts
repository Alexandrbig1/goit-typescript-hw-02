export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RecordRole = Record<UserRole, string>;

const RoleDescription: RecordRole = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
