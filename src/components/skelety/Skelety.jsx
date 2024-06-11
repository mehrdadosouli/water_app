import ContentLoader from "react-content-loader"

function Skelety({width,height,checkeds}) {
    return (
            <ContentLoader  speed={2} viewBox="0 0 400 160" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" style={{display:`${checkeds ? "hidden" : "flex"}`}} >
                <rect x="48" y="8" rx="0" ry="0" width={width} height={height} />
            </ContentLoader>
    )
}

export default Skelety
