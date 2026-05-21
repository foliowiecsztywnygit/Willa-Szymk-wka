import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => cleanup());

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

(globalThis as unknown as { IntersectionObserver: typeof IntersectionObserver }).IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;

