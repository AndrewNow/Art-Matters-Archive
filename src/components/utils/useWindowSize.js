import React from "react"

//taken from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm 
//this allows us to animate the sidebar differently depending on the window width

export default function useWindowSize() {
  const isSSR = typeof window === 'undefined'
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    // height: isSSR ? 800 : window.innerHeight,
    // we don't need height for the sake of opening sidebar responsively
  })

  const changeWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      // height: window.innerHeight
    })
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize)
    return () => {
      //cleanup, remove event listener for performance
      window.removeEventListener("resize", changeWindowSize)
    }
  }, [])

  return windowSize
}