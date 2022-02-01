import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPublication = () => (
  <ContentLoader 
    speed={2}
    width={615}
    height={820}
    viewBox="0 0 615 820"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="170" y="406" rx="0" ry="0" width="1" height="7" /> 
    <rect x="16" y="14" rx="100" ry="100" width="32" height="32" /> 
    <rect x="71" y="18" rx="0" ry="0" width="104" height="9" /> 
    <rect x="72" y="34" rx="0" ry="0" width="58" height="10" /> 
    <rect x="0" y="62" rx="0" ry="0" width="615" height="613" />
  </ContentLoader>
)

export default LoaderPublication