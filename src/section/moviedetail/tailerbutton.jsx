import { Play } from "lucide-react";

const TrailerButton = ({ trailer }) => {
  if (!trailer) {
    return null;
  }

  return (
    <a
      href={trailer}
      target="_blank"
      rel="noreferrer"
      className="mt-8 inline-flex items-center gap-2 rounded bg-[#e50914] px-6 py-3 font-bold text-white transition hover:bg-[#e50950]"
    >
      <Play className="h-4 w-4 fill-current" />
      Watch Trailer
    </a>
  );
};

export default TrailerButton;