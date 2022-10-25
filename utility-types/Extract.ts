type E0 = Extract<"a" | "b" | "c", "a" | "f">;
// type E0 = "a"

type E1 = Extract<string | number | (() => void), Function>;
// type E1 = () => void