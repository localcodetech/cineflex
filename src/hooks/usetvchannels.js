import { useEffect, useState } from "react";
import { getTVChannels } from "@/api/api";

const useTVChannel = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const loadChannels = async () => {
      try {
        const data = await getTVChannels();
        setChannels(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadChannels();
  }, []);

  return channels;
};

export default useTVChannel;