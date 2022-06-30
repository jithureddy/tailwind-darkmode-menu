import React, { ElementType } from 'react'
import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import { IMenuPopoverItem } from './MenuPopover'


const variants = {
    danger: '!text-red-500 hover:!bg-red-500 hover:text-white active:!bg-red-500 active:text-white',
    regular:
        'text-gray-800 hover:!bg-gray-100 hover:text-gray-900 active:!bg-gray-200 active:text-gray-900',
}

const actives = {
    danger: '!bg-red-700 !text-white',
    regular: '!bg-gray-200',
}

interface IMenuItemProps extends IMenuPopoverItem {
    as?: ElementType<any | undefined>
    itemClass?: string
}

export function MenuItem({
    as,
    className: menuItemClass,
    disabled,
    isDanger = false,
    itemClass,
    value,
    ...rest
}: IMenuItemProps) {
    function getClassName({ active }: any) {
        return classNames(
            'cursor-pointer pl-8 pr-2 py-2 w-full',
            'flex items-center',
            'bg-white text-base font-normal',
            isDanger && variants.danger,
            !isDanger && variants.regular,
            active && (isDanger ? actives.danger : actives.regular),
            disabled && 'opacity-50 cursor-not-allowed',
            itemClass,
            menuItemClass
        )
    }

    return (
        <li>
            <Menu.Item
                as={as}
                type={as === 'button' ? 'button' : undefined}
                className={getClassName}
                disabled={disabled}
                {...rest}
            >
                {value}
            </Menu.Item>
        </li>
    )
}
