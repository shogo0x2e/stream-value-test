"use server";

import { createStreamableValue } from "ai/rsc";

export async function generate() {
  const streamable = createStreamableValue();

  const countDown = async () => {
    for (let i = 5; i > 0; i--) {
      streamable.update(i);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    streamable.done("🎉");
  };

  countDown();

  return streamable.value;
}
