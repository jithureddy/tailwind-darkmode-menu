import '../styles/output.css'
import { withHeader } from './decorator'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
}


export const decorators = [withHeader]
