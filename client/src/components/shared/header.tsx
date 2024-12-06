import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

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

                <div className='flex items-center'>
                    <Button variant={"outline"} className='gap-2'>
                        <User className='w-v4 h-v4' />
                        Войти
                    </Button>
                </div>
            </Container>
        </header>
    );
};