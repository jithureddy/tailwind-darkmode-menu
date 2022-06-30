import React, { ElementType, Fragment, useState } from 'react'
import classNames from 'classnames'
import { Menu, Portal, Transition } from '@headlessui/react'
import PopperJs from '@popperjs/core'
import { usePopper } from 'react-popper'
import { IClassNameProps } from '../../@types'
import { MenuItem } from './MenuItem'


export interface IMenuPopoverItem extends IClassNameProps {
    disabled?: boolean
    id: string | number
    isActive?: boolean
    isDanger?: boolean
    onClick?: any
    value: string | React.ReactElement
}

export interface IMenuPopoverProps extends IClassNameProps {
    /**
     * Defines disabled state of menu
     */
    disabled?: boolean
    /**
     * Defines the header title for options
     */
    itemsHeader?: React.ReactNode
    /**
     * Defines popover wrapper class names
     */
    itemsWrapperClass?: string
    /**
     * Check if to apply default buttons styles
     */
    isDefaultButtonStyles?: boolean
    /**
     * Defines menu item element type
     */
    menuItemAs?: ElementType<any | undefined>
    /**
     * Defines menu item class names
     */
    menuItemClass?: string
    /**
     * Defines menu item options array
     */
    menuItems: IMenuPopoverItem[]
    /**
     * Defines the default placement of the popover container
     */
    placement?: PopperJs.Placement
    /**
     * Defines the CSS position of the popover container
     */
    strategy?: PopperJs.PositioningStrategy
    /**
     * Defines trigger element. Can say trigger button's children
     */
    trigger: string | React.ReactElement
    /**
     * Defines trigger button additional class names
     */
    triggerButtonClass?: string
}


const getFocusStyle = (ringOffsetColor = 'focus-visible:ring-offset-white') =>
    `focus:outline-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${ringOffsetColor}`

export function MenuPopover({
    className,
    disabled = false,
    itemsHeader,
    itemsWrapperClass = 'left-0',
    menuItemAs = 'button',
    menuItemClass,
    menuItems,
    placement = 'bottom-end',
    strategy = 'fixed',
    trigger,
    triggerButtonClass = '',
    isDefaultButtonStyles = true,
    ...other
}: IMenuPopoverProps) {
    const popperElRef = React.useRef(null)
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
        strategy,
    })
    /**
     * TODO: As per tailwind documentation dark:hover:bg-gray-600 is not working
     * Issue: https://github.com/tailwindlabs/tailwindcss/issues/8746
     */
    const defaultbuttonClass = classNames(
        'group inline-flex items-center justify-center border-transparent',
        'text-base font-medium transition-all rounded outline-none p-2',
        'bg-transparent text-gray-700 dark:text-gray-100',
        'hover:bg-gray-200 active:bg-gray-300',
        'dark:hover:bg-gray-600 dark:active:bg-gray-500',
        'disabled:!text-gray-400 disabled:cursor-not-allowed',
        getFocusStyle(),
        triggerButtonClass
    )

    const handleSetPopperElement = (element: any) => () => setPopperElement(element)

    return (
        <Menu as="div" className={classNames('relative text-left', className)} {...other}>
            {({ open }) => (
                <Fragment>
                    <Menu.Button
                        ref={setReferenceElement}
                        disabled={disabled}
                        className={isDefaultButtonStyles ? defaultbuttonClass : triggerButtonClass}
                    >
                        {trigger}
                    </Menu.Button>

                    <Portal>
                        <div ref={popperElRef} style={styles.popper} {...attributes.popper}>
                            <Transition
                                as={Fragment}
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                beforeEnter={handleSetPopperElement(popperElRef.current)}
                                afterLeave={handleSetPopperElement(null)}
                            >
                                <Menu.Items
                                    as="ul"
                                    className={classNames(
                                        'whitespace-nowrap min-w-[240px] pb-2 list-none',
                                        'bg-white rounded-sm border border-gray-100 shadow-lg z-dialog',
                                        'focus:outline-none',
                                        itemsHeader ? 'pt-0' : 'pt-2',
                                        itemsWrapperClass
                                    )}
                                >
                                    {itemsHeader && (
                                        <li className="px-4 pt-3 pb-2 text-sm text-gray-500 font-medium">
                                            {itemsHeader}
                                        </li>
                                    )}
                                    {menuItems
                                        && menuItems.map(item => (
                                            <MenuItem
                                                as={menuItemAs}
                                                key={item.id}
                                                itemClass={menuItemClass}
                                                {...item}
                                            />
                                        ))}
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Portal>
                </Fragment>
            )}
        </Menu>
    )
}
