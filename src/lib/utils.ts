import slug from 'slug'

export type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export function downloadFile(filename: string, text: string) {
	const element = document.createElement('a')
	element.setAttribute(
		'href',
		'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
	)
	element.setAttribute('download', filename)

	element.style.display = 'none'
	document.body.appendChild(element)

	element.click()

	document.body.removeChild(element)
}

export function formatFilename(name: string) {
	return slug(name, { lower: true }).substr(0, 200)
}
