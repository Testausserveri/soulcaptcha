import { useEffect, useState } from "react"
import { Content } from "../Content/Content"
import "./Agreement.css"

function TopPart({details}) {
    const box = document.getElementsByClassName("signatureCanvas")[0]?.getBoundingClientRect()
    
    return (
        <div className="topPart" style={{height: box?.top}}>
            <Content>
                <p>
                    I, {details.firstName} {details.lastName}, herebly confirm that my slavery will begin today for the company Testausserveri.
                </p>
            </Content>
        </div>
    )
}
function BottomPart({details}) {
    const box = document.getElementsByClassName("signatureCanvas")[0]?.getBoundingClientRect()

    console.log(box)
    
    return (
        <div className="bottomPart" style={{paddingTop: `${box?.top + 100}px`}}>
            <Content>
                <p>
                    {details.firstName} {details.lastName}
                </p>
            </Content>
        </div>
    )
}

export function Agreement({visible, details}) {
    const [fillStyle, setFillStyle] = useState({})
    const transition = "width 3s, height 3s, top 3s, left 3s"
    useEffect(() => {
        if (visible) {
            const {width, height, top, left} = document.getElementsByClassName("botCheckSection")[0]?.getBoundingClientRect()

            setFillStyle({
                width, height, top, left, transition
            })

            setTimeout(() => {
                setFillStyle({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    top: 0,
                    left: 0,
                    transition
                })
            }, 50)
        }
    }, [visible])
    return (
        <div className={visible ? "agreement agreementVisible" : "agreement"}>
            <div className="agreementFill" style={fillStyle}></div>
            <TopPart details={details} />
            <BottomPart details={details} />
        </div>
    )
}