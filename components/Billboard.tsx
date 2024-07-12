import React from "react";
import useBillboards from "@/hooks/useBillabord";
const Billboard=()=>{
    const { data } = useBillboards();
    return(
        <div className="relative h-[56.25vw]">
<img src="/images/yellow_user.jpg" alt="hero" />
        </div>
    )
};
export default Billboard;