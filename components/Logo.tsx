import React from "react";
import { PiggyBank } from "lucide-react";
function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-amber-500 "></PiggyBank>
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text  text-3xl font-bold text-transparent ">
        BudgetTracker
      </p>
    </a>
  );
}

export default Logo;
