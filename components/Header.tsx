"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useSupabase } from "./providers";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { supabase } = useSupabase();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set scrolling state
      setIsScrolling(true);

      // Clear scrolling state after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Always show header at the top of the page
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Check for active session on mount
    const checkSession = async () => {
      const user = await supabase.auth.user();
      setUser(user ?? null);
    };

    checkSession();

    // Listen for auth changes
    console.log("DEBUG: Setting up auth state change listener");
    const authResponse = supabase.auth.onAuthStateChange((event, session) => {
      console.log("DEBUG: Auth state changed:", event, session?.user?.email);
      setUser(session?.user ?? null);
    });

    console.log("DEBUG: Auth response structure:", authResponse);
    console.log("DEBUG: Subscription object:", authResponse.data);
    console.log("DEBUG: Subscription type:", typeof authResponse.data);

    // Handle different Supabase client structures
    let unsubscribe: (() => void) | null = null;

    if (authResponse.data) {
      // Check for nested subscription structure (mock client)
      if (
        authResponse.data.subscription &&
        typeof authResponse.data.subscription.unsubscribe === "function"
      ) {
        unsubscribe = authResponse.data.subscription.unsubscribe;
        console.log("DEBUG: Found nested subscription.unsubscribe");
      }
      // Check for direct unsubscribe method (real client)
      else if (typeof authResponse.data.unsubscribe === "function") {
        unsubscribe = authResponse.data.unsubscribe;
        console.log("DEBUG: Found direct subscription.unsubscribe");
      }
      // Check if data itself is the unsubscribe function (some versions)
      else if (typeof authResponse.data === "function") {
        unsubscribe = authResponse.data;
        console.log("DEBUG: Data itself is the unsubscribe function");
      }
    }

    return () => {
      console.log("DEBUG: Cleaning up auth subscription");
      console.log("DEBUG: Unsubscribe function:", unsubscribe);
      console.log("DEBUG: Unsubscribe type:", typeof unsubscribe);
      if (unsubscribe) {
        if (typeof unsubscribe === "function") {
          unsubscribe();
          console.log("DEBUG: Successfully unsubscribed");
        } else {
          console.log("DEBUG: Unsubscribe is not a function, skipping cleanup");
        }
      } else {
        console.log("DEBUG: No unsubscribe method found, skipping cleanup");
      }
    };
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 ${
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700"
              : "bg-slate-900/90 backdrop-blur-sm shadow-sm"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold text-white">
                  FaithConnect
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="/connect"
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  Connect
                </Link>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  Events
                </Link>
                <Link
                  href="/resources"
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  Resources
                </Link>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                {user ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                ) : (
                  <Link href="/connect/register">
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 flex items-center gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                )}
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Give
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                >
                  Watch Live
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-slate-800 border-t border-slate-700"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-md font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/connect"
                    className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-md font-medium"
                  >
                    Connect
                  </Link>
                  <Link
                    href="/events"
                    className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-md font-medium"
                  >
                    Events
                  </Link>
                  <Link
                    href="/resources"
                    className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-md font-medium"
                  >
                    Resources
                  </Link>
                  <div className="px-3 py-2 space-y-2">
                    {user ? (
                      <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-slate-700 w-full flex items-center justify-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Button>
                    ) : (
                      <Link href="/connect/register" className="w-full">
                        <Button
                          variant="outline"
                          className="border-cyan-500 text-cyan-400 hover:bg-slate-700 w-full flex items-center justify-center gap-2"
                        >
                          <LogIn className="h-4 w-4" />
                          Login
                        </Button>
                      </Link>
                    )}
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">
                      Give
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-slate-700 w-full"
                    >
                      Watch Live
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
