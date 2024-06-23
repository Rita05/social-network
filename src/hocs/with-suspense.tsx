import { ComponentType, Suspense } from "react"

export const WithSuspense = <T extends {}>(Component: ComponentType<T>) => {
	return (props: T) => {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Component {...props} />
			</Suspense>
		)
	}
}

