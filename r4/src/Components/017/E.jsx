export default function E({children}) {

    // console.log(children.props.className);

    return(
        <div className="nice-border">
            {children}
            {children}
        </div>
    )
}