import { useEffect, useState } from "react";

export function useData<T>(options: { path: string; defaultValue: T }) {
  const { path, defaultValue } = options;
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    fetch(path)
      .then((t) => t.json())
      .then(setData);
  }, []);
  return { data };
}
