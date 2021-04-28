import { useEffect, useState } from "react";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    // const response = await fetch(url)
    // const initialData = await response.json();
    // console.log(initialData);
    setLoading(true);

    const initialData = [
      {
        title: "공부하기",
        id: 1233,
        status: "todo",
      },
      {
        title: "스터디준비",
        id: 1234,
        status: "todo",
      },
      {
        title: "알고리즘공부",
        id: 1230,
        status: "todo",
      },
      {
        title: "컴퓨터게임",
        id: 1231,
        status: "todo",
      },
    ];

    setTimeout(() => {
      callback(initialData);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};
export default useFetch;
