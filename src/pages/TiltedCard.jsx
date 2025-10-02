import React from "react";

export default function TiltedCard({ children }) {
    return (
        <div className="group relative w-64 h-40 [perspective:1000px]">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition duration-300" />

            <div className="relative w-full h-full rounded-xl bg-white shadow-xl transition-transform duration-300 group-hover:rotate-x-6 group-hover:rotate-y-6">
                <div className="flex items-center justify-center h-full p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
