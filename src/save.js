/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { prefix, suffix, customColor, alignment } = attributes;
	const currentYear = new Date().getFullYear();
	const blockProps = useBlockProps.save({
		className: "current-year-block_wrapper",
		style: { textAlign: alignment },
	});

	return (
		<p {...blockProps}>{`${prefix ? prefix : ""}${currentYear}${
			suffix ? suffix : ""
		}`}</p>
	);
}
