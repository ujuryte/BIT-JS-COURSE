import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

export default function Racoon() {

    // const fun = () => {
    //     let a = 5;
    //     a++;
    //     return a * 10;
    // }

    const padding = '20px';

    const pinkBox = <div className = "pinkBox"></div>;

    return (
        <div className="racoon">
            {pinkBox}
            <h2 className="animal red">
                <i style={{letterSpacing: '30px'}}>RACOON1 {2 * 4}</i>
            </h2>
            <h2 className="animal">
                <i style={
                    {
                        color:'coral',
                        backgroundColor: randColor(),
                        padding: rand(0, 1) ? padding : null
                    }
                }>
                    RACOON2
                </i>
            </h2>
            <span>small</span>
            {pinkBox}
        </div>
    );
}

// export default Racoon;