import sum from "../sum";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(2, 1)).toBe(3);
  });
});
