import { useEffect, useMemo } from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "./theme";
const CRISP_WEBSITE_ID = process.env.REACT_APP_SECRET_KEY;

export const CrispChat = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      console.log("Crisp script loaded");
      if (window.$crisp) {
        window.$crisp.push(["set", "session:data", [[["theme", "dark"]]]]);
        window.$crisp.push(["set", "user:nickname", ["John Doe"]]);

        // Apply custom styles
        const style = document.createElement("style");
        style.innerHTML = `
    
        .crisp-client .cc-1euts {
         background-color: #141b2d!important;
        
        }
       `;

        document.head.appendChild(style);
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [colors]);

  return null;
};
