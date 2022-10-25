interface CatInfo {
  age: number;
  breed: string;
}

type CartName = "miffy" | "boris" | "mordred";

const cats: Record<CartName, CatInfo> = {
  miffy: { age: 10, breed: "persian" },
  boris: { age: 5, breed: "Main Coon" },
  mordred: { age: 16, breed: "British Shorthair" }
}

// const cats: Record<CartName, CatInfo>
cats.boris;