declare interface IClassNameProps {
    /**
     * Defines the container styles & layout
     */
    className?: string
}
/**
 * Defines standard orientations
 */
declare enum Orientation {
    'horizontal',
    'vertical',
}

/**
 * Defines default sizes
 */
declare enum Sizes {
    'xs',
    'sm', //24
    'md', //32
    'lg', //40
    'xl',
}

/**
 * Defines default button sizes
 */
declare enum ButtonSizes {
    'sm', //24
    'md', //32
    'lg', //40
}

/**
 * Defines available color themes
 */
declare enum Variant {
    'primary' = 'primary',
    'secondary' = 'secondary',
    'ghost' = 'ghost',
    'danger' = 'danger',
    'white' = 'white',
}

declare interface IOptionProps {
    /**
     * Defines the avatar background color
     */
    avatarColor?: string
    /**
     * Defines the group it belongs to
     */
    group?: string
    /**
     * Defines the option unique id
     */
    id?: string | number
    /**
     * Defines the display label of an option
     */
    label?: string
    /**
     * Defines the leading icon of the option item
     */
    leadingIcon?: string
    /**
     * Defines the display label of an option
     */
    name?: string
    /**
     * Defines the avatar text color
     */
    textColor?: string
    /**
     * Defines the value of an option
     */
    value?: string
}

/**
 * Defines the string type
 */
declare type IString = string | undefined


export {
    IClassNameProps,
    IOptionProps,
    Orientation,
    Sizes,
    IString,
    Variant,
    ButtonSizes,
}
