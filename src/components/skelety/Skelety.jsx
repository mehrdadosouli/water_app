import ContentLoader from "react-content-loader"

function Skelety({checkeds}) {
    return (
            <ContentLoader  speed={2} width={400} height={160} viewBox="0 0 400 160" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" style={{display:`${checkeds ? "hiiden" : "flex"}`}} >
                <rect x="48" y="8" rx="3" ry="3" width="88" height="22" />
            </ContentLoader>
    )
}

export default Skelety