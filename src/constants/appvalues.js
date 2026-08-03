


export const sortOptions = [
  { value: "popularity.desc", label: "Most Popular" },
  { value: "primary_release_date.desc", label: "Newest" },
  { value: "vote_average.desc", label: "Highest Rated" },
  { value: "revenue.desc", label: "Box Office" },
];


export const currentYear = new Date().getFullYear();


export const years = Array.from(
    {length: currentYear - 1959},
    (_, index) => currentYear - index 
)




 export const navLinkStyle = ({isActive}) =>{
        return (
          isActive ? "text-white font-bold border-b-2  border-[#e50914] pb-1 capitalize " : "text-neutral-400 hover:text-white transition duration-200 "
        )
    }



export const appNameStyle = "text-2xl font-bold text-primary hover:translate-y-0.5 duration-1000 transition"    