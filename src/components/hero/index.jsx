import React from 'react';
import { AiFillFire } from "react-icons/ai";
import hero_img from '../../assets/hero_img.png';
import hero_img1 from '../../assets/hero_img1.png';
import hero_img2 from '../../assets/hero_img2.png';
import hero_img_mobile from '../../assets/hero_img_mobile.png';
import Button from '../button';

const Hero = () => {
    return (
        <div className='max-w-[1110px] mx-auto px-[16px] xl:px-0 mt-[20px]'>
            <div className='relative hidden md:flex items-center justify-between h-[455px] rounded-[24px] bg-light-grey -z-10'>
                <div className='w-[500px] lg:w-[680px] ml-[40px] xl:ml-[66px] my-[24px] xl:my-[44px]'>
                    <h1 className='text-[32px]/[37px] lg:text-[44px]/[49px] font-[600]'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
                    <p className='my-[12px] font-[400]'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
                    <div className='flex gap-[40px]'>
                        <p className='flex items-center gap-[10px]'><AiFillFire className='text-danger text-[32px] lg:text-[42px]' /> <b className='text-[32px] lg:text-[42px]'>$12.56</b> <span className='ml-[10px] text-[20px] text-text-secondary line-through'>$15.56</span></p>
                    </div>
                    <div className='flex gap-[10px] mt-[12px]'>
                        <Button variant="primary">Add to cart</Button>
                        <Button variant="secondary">Discover</Button>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0 -z-10'>
                    <img src={hero_img} alt="hero_img" />
                </div>
            </div>
            <div className='rounded-[24px] bg-light-grey overflow-hidden'>
                <img src={hero_img_mobile} className='w-full' alt="hero_img_mobile" />
                <div className='flex gap-[40px] px-[16px]'>
                        <p className='flex items-center gap-[10px]'><AiFillFire className='text-danger text-[28px]' /> <b className='text-[28px] text-danger'>$12.56</b> <span className='ml-[10px] text-[20px] text-text-secondary line-through'>$15.56</span></p>
                    </div>
                    <h1 className='text-[24px]/[29px] font-[600] my-[10px] px-[16px]'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
                    <p className='my-[12px] font-[400] px-[16px]'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
            <div className='flex gap-[10px] mt-[12px] px-[16px] pb-[15px]'>
                        <Button variant="primary">Add to cart</Button>
                        <Button variant="secondary">Discover</Button>
                    </div>
            </div>
            <div className='flex items-center justify-between bg-[#FFE62E17] rounded-[12px] mt-[20px] text-center p-[15px]'>
                <img src={hero_img1} className='hidden md:block' alt="hero_img1" />
                <div>
                    <h3 className='text-[20px] md:text-[24px] font-semibold'>We sell seeds</h3>
                    <p className='text-[14px] md:text-[16px]'>that always sprout and gardening supplies which never break</p>
                </div>
                <img src={hero_img2} className='hidden md:block' alt="hero_img2" />
            </div>
        </div>
    );
};

export default Hero;