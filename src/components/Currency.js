export default function Currency({ quantity, currency = "USD" }) {
  if (typeof quantity !== "number" || isNaN(quantity)) {
    console.warn("Invalid quantity passed to Currency component:", quantity);
    return <>$0.00</>;
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(quantity);

  return <>{formatted}</>;
}
