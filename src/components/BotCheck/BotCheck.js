import SignatureCanvas from "react-signature-canvas"
import { Content } from "../Content/Content"
import "./BotCheck.css"

export function BotCheck({visible, canvasRef}) {
    return (
        <div className={`botCheckSection ${!visible ? "agreementVisible" : ""}`}>
            <Content>
                <div className="hideable">
                    <h2>Bot check</h2>
                    <span className="subtitle">
                        Please draw your signature on the line to prove you’re a human.
                    </span>
                </div>
                <div style={{paddingBottom: "100px"}}>
                    <SignatureCanvas 
                        penColor="black"
                        canvasProps={{width: 500, height: 100, className: "signatureCanvas"}}
                        ref={canvasRef} />
                </div>
            </Content>
        </div>
    )
}