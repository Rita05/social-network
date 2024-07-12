import { ComponentType, Suspense } from "react"
//components
import { Preloader } from "../../elements/ui/preloader/Preloader"

export const WithSuspense = <T extends {}>(Component: ComponentType<T>) => {
	return (props: T) => {
		return (
			<Suspense fallback={<Preloader />}>
				<Component {...props} />
			</Suspense>
		)
	}
}

