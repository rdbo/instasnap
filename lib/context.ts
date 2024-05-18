"use client";

import { createContext } from "react";

export interface Session {
  handle: string;
  name: string;
  profilePicture: string | null;
}

export interface SessionContextProps {
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

export const SessionContext = createContext<SessionContextProps | null>(null);
