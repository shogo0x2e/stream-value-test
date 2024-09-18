"use client";

import { readStreamableValue } from "ai/rsc";
import { useState } from "react";
import { generate } from "./actions";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [generation, setGeneration] = useState();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button
        className="mb-4"
        onClick={async () => {
          const stream = await generate();

          for await (const digit of readStreamableValue(stream)) {
            setGeneration(digit);
          }
        }}
      >
        Generate
      </Button>
      <p className="text-4xl font-bold">{generation ?? "None"}</p>
    </div>
  );
}
