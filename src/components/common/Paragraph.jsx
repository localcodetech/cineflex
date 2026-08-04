


const Paragraph = ({text, className = "", children}) =>{



    return (
        <p className={`mt-3  leading-relaxed text-neutral-400 ${className}`}>

{text}
{children}
        </p>
    )
};

export default  Paragraph;