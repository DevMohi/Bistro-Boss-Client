import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    fetch(`${url}/menu`)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};
