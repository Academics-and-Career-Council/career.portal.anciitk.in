import { Rules } from "react-abac";

interface User {
  uuid: String;
  roles: Role[];
  permission: permissions[];
}

export enum permissions {
  ELEVATE_USER = "ELEVATE_USER",
  DEMOTE_USER = "DEMOTE_USER",
  BAN_USER = "BAN_USER",
}

export enum Role {
  BANNED = "BANNED",
  ANONYMOUS = "ANONYMOUS",
  USER = "USER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}

export const rules: Rules<Role, permissions, User> = {
  [Role.ADMIN]: {
    [permissions.BAN_USER]: true,
    [permissions.DEMOTE_USER]: true,
    [permissions.ELEVATE_USER]: true,
  },

  [Role.MANAGER]: {
    [permissions.BAN_USER]: true,
    [permissions.DEMOTE_USER]: true,
    [permissions.ELEVATE_USER]: true,
  },

  [Role.USER]: {
    [permissions.BAN_USER]: false,
    [permissions.DEMOTE_USER]: false,
    [permissions.ELEVATE_USER]: false,
  },

  [Role.ANONYMOUS]: {},
};
