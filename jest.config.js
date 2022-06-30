module.exports = {
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/{Transition,index}.{ts,tsx}',
		'!src/{stories,utils}/*',
		'!<rootDir>/node_modules/',
	],
	coveragePathIgnorePatterns: ['.*__snapshots__/.*', '.stories.*'],
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-canvas-mock'],
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	testPathIgnorePatterns: ['.*\\.d\\.ts', '.*\\.stories\\.{tsx,mdx}', '/node_modules/'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
}
