import SkeletonPending from '../../components/Skeleton/SkeletonPending'
import SkeletonError from '../../components/Skeleton/SkeletonError'
const withSkeleton = (Component) => {
	return function WithSkeleton (props) {
		const { status } = props
		if (status === 'rejected') {
			return <SkeletonError />
		} else if (status === 'pending') {
			return <SkeletonPending />
		} else {
			return <Component {...props} />
		}
	}
}

export default withSkeleton
