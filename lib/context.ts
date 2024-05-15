"use client";

import { createContext } from "react";

export interface Session {
  handle: string;
  name: string;
}

export const SessionContext = createContext<Session | null>(null);
