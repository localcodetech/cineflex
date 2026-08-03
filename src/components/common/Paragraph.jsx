


const Paragraph = ({text, className = ""}) =>{



    return (
        <p className={`mt-3  leading-relaxed text-neutral-400 ${className}`}>

{text}
        </p>
    )
};

export default  Paragraph;