import React,{useState} from 'react';
import { BagsData,BagsContext } from './BagData';

const BData = ({children}:any) => {
    const [list] =useState<BagsData>({} as BagsData)
    const [data] =useState<BagsData[]>([
        {
            id : 1,
            img: require('../images/b3.png'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 2,
            img: require('../images/b1.jfif'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 3,
            img: require('../images/b3.png'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 4,
            img: require('../images/b1.jfif'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 5,
            img: require('../images/b3.png'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 6,
            img: require('../images/b1.jfif'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        }

    ]);

    const {Provider} = BagsContext; //Provider 

  return (
    <Provider value ={{bagList : data,list}}>
        {children}
    </Provider>
  )
}

export default BData;