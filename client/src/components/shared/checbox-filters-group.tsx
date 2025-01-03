'use client'

import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
    title: string;
    items: FilterChecboxProps[];
    defaultItems: FilterChecboxProps[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const ChecboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (value: string) => {
        setSearchValue(value);
    };

    const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems || items.slice(0, limit);

    return <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {showAll &&
            <div className='mb-5'>
                <Input onChange={e => onChangeSearchInput(e.target.value)} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
            </div> 
        }

        <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {list.map((item) => (
                <FilterCheckbox
                    onCheckedChange={(ild) => console.log(ild)}
                    checked={false}
                    key={String(item.value)}
                    value={item.value}
                    text={item.text}
                    endAdornment={item.endAdornment}
                />
            ))}
        </div>

        {items.length > limit && (
            <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                    {showAll ? 'Скрыть' : '+ Показать все'}
                </button>
            </div>
        )}
    </div>;
};