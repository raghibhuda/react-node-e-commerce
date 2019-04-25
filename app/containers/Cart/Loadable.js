/**
 *
 * Asynchronously loads the component for Cart
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
