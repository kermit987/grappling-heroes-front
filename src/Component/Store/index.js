import { createStore } from 'redux';
import profile from 'Component/Reducer/index.js';

// export const Store = createStore({ ////why this doesn't work
//   state: profile
// });

export const Store = createStore(profile);
