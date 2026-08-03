

const Head = ({className, text})=>{


    return (

        <h2 className={`font-bold uppercase tracking-wide text-foreground ${className}`}>

{text}
        </h2>
    )
};


export default  Head;