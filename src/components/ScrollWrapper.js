import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';

export const Wrapper = ({children}) => {
    const location = useLocation();
    // document.documentElement.scroll
    useLayoutEffect(() => {
      window.scrollTo({ top:0, left:0, behavior: "instant"})
    }, [location.pathname]);
    return children
  } 