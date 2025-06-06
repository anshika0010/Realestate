"use client";
import React, { useState, useEffect } from "react";
import { Home, Search, Heart, User, Menu, X } from "lucide-react";
import logo from "../assets/logo1.jpg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-40" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-navy-900 hover:text-coral-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-navy-900 hover:text-coral-500 transition-colors"
            >
              Properties
            </a>
            <a
              href="#"
              className="text-navy-900 hover:text-coral-500 transition-colors"
            >
              Agents
            </a>
            <a
              href="#"
              className="text-navy-900 hover:text-coral-500 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-navy-900 hover:text-coral-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-navy-900 hover:text-coral-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-navy-900 hover:text-coral-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="btn btn-primary">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-navy-900 hover:text-coral-500 py-2 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-navy-900 hover:text-coral-500 py-2 transition-colors"
              >
                Properties
              </a>
              <a
                href="#"
                className="text-navy-900 hover:text-coral-500 py-2 transition-colors"
              >
                Agents
              </a>
              <a
                href="#"
                className="text-navy-900 hover:text-coral-500 py-2 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-navy-900 hover:text-coral-500 py-2 transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="mt-4 flex flex-col space-y-3">
              <button className="btn btn-outline w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </button>
              <button className="btn btn-outline w-full">
                <Heart className="h-4 w-4 mr-2" />
                Favorites
              </button>
              <button className="btn btn-primary w-full">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
