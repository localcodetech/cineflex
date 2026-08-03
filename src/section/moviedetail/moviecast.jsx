import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";


const MovieCast = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <Head className="text-sm font-bold uppercase text-neutral-400">
        Cast
      </Head>

      <Paragraph className="mt-2 text-sm text-neutral-200">
        {cast.map((person) => person.name).join(", ")}
      </Paragraph>
    </div>
  );
};

export default MovieCast;