import { ComponentType, Suspense } from "react"

export const WithSuspense = <T,>(Component: ComponentType<T>) => {
	return (props: T) => {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				{/* @ts-expect-error Server Component */}
				<Component {...props} />
			</Suspense>
		)
	}
}

