import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkOnline = () => {
      console.log("here1");
      if (!navigator.onLine) {
        setIsOnline(false);
      }
    };
    const checkOfflineEvent = () => {
      setIsOnline(false);
    };
    const checkOnlineEvent = () => {
      setIsOnline(true);
    };
    console.log("mount offline");
    window.addEventListener("load", checkOnline);
    window.addEventListener("offline", checkOfflineEvent);
    window.addEventListener("online", checkOnlineEvent);

    return () => {
      console.log("unmount offline");
      window.removeEventListener("load", checkOnline);
      window.removeEventListener("offline", checkOfflineEvent);
      window.removeEventListener("online", checkOnlineEvent);
    };
  }, []);

  return isOnline;
};

export default useOnline;
