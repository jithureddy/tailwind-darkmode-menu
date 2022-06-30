import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MenuPopover, IMenuPopoverItem, IMenuPopoverProps } from './MenuPopover'


const menuItems: IMenuPopoverItem[] = [
    {
        id: 'Item1',
        value: 'Menu Item 1',
    },
    {
        id: 'Item2',
        value: 'Menu Item 2',
    },
]

export default {
    args: {
        menuItems,
    },
    component: MenuPopover,
    title: 'Components/MenuPopover',
} as Meta

const Template: Story<IMenuPopoverProps> = args => <MenuPopover {...args} />
const DarkTemplate: Story<IMenuPopoverProps> = args => (
    <div className="dark bg-gray-700 p-8 w-full">
        <MenuPopover {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    trigger: 'Menu',
}

export const Dark = DarkTemplate.bind({})
Dark.args = {
    trigger: 'Menu',
}

export const ItemsHeader = Template.bind({})
ItemsHeader.args = {
    itemsHeader: 'Break down by:',
    trigger: 'Menu',
}

export const Placement = Template.bind({})
Placement.args = {
    itemsHeader: 'Break down by:',
    placement: 'right-start',
    trigger: 'Menu',
}

export const TriggerIcon = DarkTemplate.bind({})
TriggerIcon.args = {
    trigger: <div>Custom Icon</div>,
}

export const DisabledIttem = Template.bind({})
DisabledIttem.args = {
    menuItems: [
        {
            disabled: true,
            id: 'disabled',
            value: 'Disabled item',
        },
        ...menuItems,
    ],
    trigger: (
        <div className="flex items-center">
             Menu
        </div>
    ),
}

export const DangerItem = Template.bind({})
DangerItem.args = {
    menuItems: [
        ...menuItems,
        {
            id: 'danger',
            isDanger: true,
            value: 'Menu Item Danger',
        },
    ],
    trigger: (
        <div className="flex items-center">
            Menu
        </div>
    ),
}

export const StyledItem = Template.bind({})
StyledItem.args = {
    menuItems: [
        ...menuItems,
        {
            className: 'text-primary-600 bg-primary-50 hover:bg-primary-100 hover:text-primary-700',
            id: 'styled',
            value: 'Styled item',
        },
    ],
    trigger: (
        <div className="flex items-center">
           Menu
        </div>
    ),
}
