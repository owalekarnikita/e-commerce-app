import React from "react";

export interface BagsData {
    id : number
    img : string,
    name: string,
    price : number,
}

type Props = {
 bagList : BagsData[],
 list : BagsData
}


export const BagsContext = React.createContext<Props>({} as Props);