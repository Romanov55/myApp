import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    name: string;
    price: number;
    count?: number;
    imageUrl: string;
    imageAlt: string;
    className?: string;
}


export const ProductCard: React.FC<Props> = ({ name, price, count, imageUrl, className }) => {
    return (
        <div className={className}>
            <Link href="/product/1">
                <div className='className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]"'>
                    <Image src={imageUrl} alt={`Пицца ${name}`} className="w-[215px] h-[215px]" />
                </div>
            </Link>
        </div>
    );
};