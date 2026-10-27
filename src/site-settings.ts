/**
 * Site-wide settings you may want to change.
 */

/** Google Form that opens when someone clicks "Suggest an edit". */
export const FEEDBACK_FORM_URL =
	'https://docs.google.com/forms/d/e/1FAIpQLSeXF2LKzZj5EXN4vax_RTbeB0DfO8s1C26aDcf1Z9gf5wQ7Sw/viewform';

/**
 * Optional: the form's pre-filled link, with ARTICLE_TITLE and ARTICLE_URL
 * where the answers go. When set, "Suggest an edit" fills in which article
 * the person came from. Leave as '' to use the plain form link above.
 */
export const FEEDBACK_PREFILL_URL = '';

/** Builds the "Suggest an edit" link for one article. */
export function feedbackLink(title: string, pageUrl: string): string {
	if (!FEEDBACK_PREFILL_URL) return FEEDBACK_FORM_URL;
	return FEEDBACK_PREFILL_URL.replace('ARTICLE_TITLE', encodeURIComponent(title)).replace(
		'ARTICLE_URL',
		encodeURIComponent(pageUrl)
	);
}
