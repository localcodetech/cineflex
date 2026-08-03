import Paragraph from "@/components/common/Paragraph";

const MovieCast = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-sm font-bold uppercase text-neutral-400">
        Cast
      </h2>

      <Paragraph className="mt-2 text-sm text-neutral-200">
        {cast.map((person) => person.name).join(", ")}
      </Paragraph>
    </div>
  );
};

export default MovieCast;