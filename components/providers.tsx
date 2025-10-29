"use client";

import { createContext, useContext } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../app/lib/supabase.js";

// Define a more flexible type that includes both real and mock clients
type SupabaseClientType =
  | SupabaseClient
  | {
      auth: {
        user: () => Promise<any>;
        signIn: (params: any) => Promise<any>;
        signUp: (params: any) => Promise<any>;
        signOut: () => Promise<any>;
        onAuthStateChange: (callback: any) => any;
      };
      from: (table: string) => any;
    };

const SupabaseContext = createContext<{ supabase: SupabaseClientType }>({
  supabase,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error("useSupabase must be used within a Providers component");
  }
  return context;
};
