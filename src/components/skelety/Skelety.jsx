import ContentLoader from "react-content-loader"

function Skelety({width,height,x,y=50,h=160}) {
    return (
            <ContentLoader  speed={2} viewBox={`0 0 400 ${h}`}  >
                <rect x={x} y={y} rx="0" ry="0" width={width} height={height} />
            </ContentLoader>
    )
}

export default Skelety
