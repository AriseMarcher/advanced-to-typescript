type ObjectDescription<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>
}

function makeObject<D, M>(desc: ObjectDescription<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj1 = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj1.x = 10;
obj1.y = 20;
obj1.moveBy(5, 5);