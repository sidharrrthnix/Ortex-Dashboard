import { useEffect, useRef, useState } from "react";

// This hook is responsible for getting difference between
// current price and the price before 3 seconds
// it gives the percentage difference

export const usePrevPrice = (price: number) => {
  let percentage;
  const prevPriceRef = useRef<number | null>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      prevPriceRef.current = price;
    }, 3000);

    return () => clearTimeout(timeout);
  });
  if (prevPriceRef.current) {
    percentage = (
      ((prevPriceRef.current - price) / prevPriceRef.current) *
      100000
    ).toFixed(2);
  }

  return [prevPriceRef.current, percentage];
};
