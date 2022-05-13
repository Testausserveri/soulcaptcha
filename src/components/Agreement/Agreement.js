import { useEffect, useState } from "react"
import { Content } from "../Content/Content"
import "./Agreement.css"

function TopPart({details}) {
    const box = document.getElementsByClassName("signatureCanvas")[0]?.getBoundingClientRect()
    
    return (
        <Content>
            <div className="topPart" style={{height: box?.top}}>
                <Content>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Agreement</h1>
                        <p>
                            I, {details.firstName} {details.lastName}, hereby relinquish my eternal Soul from today onwards for the company Testausserveri.
                        </p>
                    </div>
                </Content>
            </div>
        </Content>
    )
}
function BottomPart({details}) {
    const box = document.getElementsByClassName("signatureCanvas")[0]?.getBoundingClientRect()

    console.log(box)
    const now = new Date();
    return (
        <div className="bottomPart" style={{paddingTop: `${box?.top + 100}px`}}>
            <Content>
                <p>
                    {details.firstName} {details.lastName}, {now.getDate()}.{now.getMonth() + 1}. {now.getFullYear()}
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