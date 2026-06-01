type Order = {
  id: number;
  items: {
    name: string;
  }[];
  customer: {
    address: {
      city: string;
    };
  };
};

const adaptOrder = createAdapter(
  (data: Order) => ({
    orderId: data.id,
    firstItemName: data.items[0].name,
    city: data.customer.address.city,
  }),
  {
    onError(error) {
      const data = error as Error;
      console.info("[order-adapter-error]:", data.message);
    },
  },
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const response: any = {
  id: 1,
  items: [{ name: "Laptop" }],
  customer: {
    // address: { city: "Manila" },
  },
};

const adapted = adaptOrder(response);
console.log("adapted", { adapted });
