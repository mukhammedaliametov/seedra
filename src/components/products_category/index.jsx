import React from 'react';
import category1 from '../../assets/category1.svg';
import category2 from '../../assets/category2.svg';
import category3 from '../../assets/category3.svg';
import category4 from '../../assets/category4.svg';
import category5 from '../../assets/category5.svg';
import category6 from '../../assets/category6.svg';
import category7 from '../../assets/category7.svg';

const ProductsCategory = () => {
    const categories = [
            {
                icon: category1,
                name: 'ALL'
            },
            {
                icon: category7,
                name: 'BUNDLES'
            },
            {
                icon: category2,
                name: 'HERBS'
            },
            {
                icon: category3,
                name: 'VEGETABLES'
            },
            {
                icon: category4,
                name: 'FRUITS'
            },
            {
                icon: category5,
                name: 'SUPPLIES'
            },
            {
                icon: category6,
                name: 'FLOWERS'
            }
        ]
    return (
        <div className='flex items-center justify-between gap-[20px] overflow-x-scroll xl:overflow-x-visible'>
            {categories.map((item, index) => {
                return(
                    <div className='flex items-center gap-[10px] text-[14px] border-2 border-light-grey h-[62px] px-[32px] rounded-[8px] flex-shrink-0 lg:flex-shrink justify-center my-[14px] cursor-pointer' key={index}>
                        <img src={item.icon} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductsCategory;