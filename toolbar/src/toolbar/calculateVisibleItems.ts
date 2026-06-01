type Item = { id: string; width: number };

export function calculateVisibleItems({
  containerWidth,
  kebabWidth,
  items,
  idOrder,
}: {
  containerWidth: number | null;
  kebabWidth: number | null;
  items: Item[];
  idOrder: string[];
}) {
  if (!containerWidth || !items.length) {
    return { visible: [], overflow: [] };
  }

  // ensure correct order
  const orderedItems = idOrder
    .map((id) => items.find((i) => i.id === id))
    .filter(Boolean) as Item[];

  // helper to fit items with optional kebab reservation
  const fit = (reserveKebab: boolean) => {
    const maxWidth =
      containerWidth - (reserveKebab && kebabWidth ? kebabWidth : 0);

    let used = 0;
    const visible: Item[] = [];
    const overflow: Item[] = [];

    for (const item of orderedItems) {
      if (used + item.width <= maxWidth) {
        visible.push(item);
        used += item.width;
      } else {
        overflow.push(item);
      }
    }

    return {
      visible: visible.map((v) => v.id),
      overflow: overflow.map((v) => v.id),
    };
  };

  // first pass: try without kebab
  let result = fit(false);

  // if overflow exists → recompute with kebab
  if (result.overflow.length > 0) {
    result = fit(true);
  }

  return result;
}
