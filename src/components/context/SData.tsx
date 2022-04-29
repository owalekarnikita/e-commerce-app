import React,{useState} from 'react';
import { ShoesContext, ShoesData } from './ShoesData';


const SData = ({children})=> {
    const [list] =useState<ShoesData>({} as ShoesData)
    const [data] =useState<ShoesData[]>([
        {
            id : 1,
            img: require('../images/s1.jpeg'),
            price : 534,
            name: "Nike Air max 270 Shoes"

        },
        {
            id : 2,
            img: require('../images/b3.png'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 3,
            img: require('../images/s4.jpg'),
            price : 534,
            name: "Nike Air max 270 Shoes"

        },
        {
            id : 4,
            img: require('../images/b1.jfif'),
            price : 680,
            name: "FS - QUILTED MAXI CROSS BAG"

        },
        {
            id : 5,
            img: require('../images/s2.jpg'),
            price : 534,
            name: "Nike Air max 270 Shoes"

        },
        {
            id : 6,
            img: require('../images/s5.jpg'),
            price : 534,
            name: "Nike Air max 270 Shoes"

        },
        {
            id : 7,
            img: require('../images/s6.jpg'),
            price : 680,
            name: "Nike Air max 540 Shoes"

        },
        {
            id : 7,
            img: require('../images/s1.jpeg'),
            price : 680,
            name: "Nike Air max 540 Shoes"

        }

    ]);

    const {Provider} = ShoesContext; //Provider 

  return (
    <Provider value ={{shoeList : data,list}}>
        {children}
    </Provider>
  )
}

export default SData;