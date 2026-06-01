type AdapterOptions<TInput> = {
  onError?: (error: unknown, data: TInput) => void;
};

export function createAdapter<TInput extends object, TOutput>(
  adapterFn: (data: TInput) => TOutput,
  { onError }: AdapterOptions<TInput> = {},
) {
  const proxyCache = new WeakMap<object, unknown>();

  function guard<T>(obj: T, path = ""): T {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    if (proxyCache.has(obj as object)) {
      return proxyCache.get(obj as object) as T;
    }

    const proxy = new Proxy(obj as object, {
      get(target, prop, receiver) {
        if (typeof prop === "symbol") {
          return Reflect.get(target, prop, receiver);
        }

        const propName = String(prop);

        const currentPath = Array.isArray(target)
          ? `${path}[${propName}]`
          : path
            ? `${path}.${propName}`
            : propName;

        if (!(prop in target)) {
          throw new Error(`Missing required field: ${currentPath}`);
        }

        const value = Reflect.get(target, prop, receiver);

        return guard(value, currentPath);
      },
    });

    proxyCache.set(obj as object, proxy);

    return proxy as T;
  }

  return (data: TInput): TOutput | null => {
    try {
      return adapterFn(guard(data));
    } catch (error) {
      onError?.(error, data);
      return null;
    }
  };
}
