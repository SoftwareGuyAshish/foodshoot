"use client";

import { NextUIProvider } from "@nextui-org/react";

export function UiProviders({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
