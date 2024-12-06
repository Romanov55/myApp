import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                
                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' width={36} height={36} className='w-v9 h-v9 2xl:w-9 2xl:h-9' alt='logo' />
                    <div>
                        <h1 className='text-v6 2xl:text-2xl uppercase font-black'>Demonstration</h1>
                        <p className='text-v3.5 2xl:text-sm text-gray-400 leading-3'>вкусней некуда</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <Button variant={"outline"} className='gap-1'>
                        <User className='w-v4 h-v4' />
                        Войти
                    </Button>

                    <Button className='group relative'>
                        <b>520 Р</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h4 w4 relative' strokeWidth={2}/>
                            <b>3</b>
                        </div>
                        <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
                    </Button>
                </div>
            </Container>
        </header>
    );
};