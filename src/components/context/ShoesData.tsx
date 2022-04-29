 import React from "react";

 export interface ShoesData {
     id : number
     img : string,
     name: string,
     price : number,
 }

 type Props = {
  shoeList : ShoesData[],
  list : ShoesData
}


export const ShoesContext = React.createContext<Props>({} as Props);