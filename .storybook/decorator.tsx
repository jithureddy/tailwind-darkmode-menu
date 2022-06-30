import { DecoratorFn } from '@storybook/react'
//@ts-ignore


const headerColors: Record<string, string> = {
    Components: 'bg-emerald-500',
    Elements: 'bg-violet-600',
    Features: 'bg-blue-500',
    Foundation: 'bg-gray-900',
    Hooks: 'bg-gradient-to-r from-violet-600 to-emerald-500',
}

export const withHeader: DecoratorFn = (Story, context) => {
    const { kind, parameters } = context
    const [type, name] = kind ? kind.split('/') : ['Type', 'Name']

    return (
        <div className="font-inter">
            <div
                className={`sticky top-0 z-10 flex items-center justify-between h-28 p-8 text-white ${headerColors[type]}`}
            >
                <div>
                    <h2 className="text-base">{type}</h2>
                    <div className="flex items-center space-x-2 ">
                        <h1 className="text-3xl font-bold">{name}</h1>{' '}
                        {parameters.version && (
                            <div className="flex items-center justify-center w-12 h-6 text-center rounded-2xl bg-pink-600 text-white text-sm font-medium">
                                V{parameters.version}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="h-12 w-px bg-white rotate-12" />
                    <div>
                        <h1 className="text-xl font-bold">Design system</h1>
                    </div>
                </div>
            </div>
            <div className="p-8">{Story()}</div>
        </div>
    )
}
