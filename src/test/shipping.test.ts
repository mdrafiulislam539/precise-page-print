import { describe, it, expect } from "vitest";
import { deliveryCharge } from "@/lib/shipping";

describe("delivery charge", () => {
  it("inside Dhaka is 80", () => expect(deliveryCharge("ঢাকা")).toBe(80));
  it("outside Dhaka is 150", () => expect(deliveryCharge("চট্টগ্রাম")).toBe(150));
});
