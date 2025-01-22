export const filterImg = (img) => {
	if (!img) {
		return
	}
	const copyImg = []
	img.split('').forEach((item) => {
		switch (item) {
			case '"':
				return
			case '[':
				return
			case ']':
				return
		}
		copyImg.push(item)
	})
	return copyImg.join('')
}
