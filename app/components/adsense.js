import Script from "next/script"

const Adsense = (pid) => {
    return (
       <Script
        async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
        crossorigin="anonymous"
        strategy="afterInteractive"
       />
    )
}

export default Adsense