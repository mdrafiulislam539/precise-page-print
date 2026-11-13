import { describe, expect, it } from "vitest";
import { categories } from "@/lib/catalog";

describe("TonRa Outfits collections", () => {
  it("offers the three stated clothing categories", () => {
    expect(categories.map((category) => category.name)).toEqual([
      "ওয়ান-পিস",
      "টু-পিস",
      "থ্রি-পিস",
    ]);
  });

  it("identifies salwar and kurti within the two-piece collection", () => {
    const twoPiece = categories.find((category) => category.slug === "two-piece");

    expect(twoPiece?.description).toContain("কুর্তি");
    expect(twoPiece?.description).toContain("সেলোয়ার");
  });
});