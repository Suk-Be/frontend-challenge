import '../styles/globals.css';

/**
 * Represents different web vitals
 * @typedef {string} metricName
 * @value FCP - First Contentful Paint
 * @value TTFB - Time to First Byte
 * @value CLS - Cumulative Layout Shift
 * @value FID - First Input Delay
 * @value LCP - Largest Contentful Paint
 * @value Next.js-hydration - Length of time it takes for the page to start and finish hydrating (in ms)
 * @value Next.js-route-change-to-render - Length of time it takes for a page to start rendering after a route change (in ms)
 * @value Next.js-render - Length of time it takes for a page to finish render after a route change (in ms)
 */

/**
 * Represents a web vitals report
 * @typedef {object} metric
 * @property {string} id - Unique identifier for the metric in the context of the current page load.
 * @property {string} name - Metric name.
 * @property {number} startTime - First recorded timestamp of the performance entry in milliseconds (if applicable).
 * @property {number} value - Value, or duration in milliseconds, of the performance entry.
 * @property {metricName} - Metric name.
 */
// comment next lines out when building for production
export function reportWebVitals(metric) {
	console.log(metric);
}

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
