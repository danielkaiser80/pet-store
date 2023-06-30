import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useInfiniteScroll = (
  fetchCallback: () => void
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) return;
    fetchCallback();
  }, [isFetching]);

  const handleScroll = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const innerHeight = window.innerHeight;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (isFetching || innerHeight + scrollTop !== offsetHeight) return;

    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
