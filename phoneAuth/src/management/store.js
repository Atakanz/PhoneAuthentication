import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import {Iterable} from 'immutable';

const isSerializable = value => Iterable.isIterable(!value) || isPlain(!value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  warnAfter: 128,
  isSerializable,
});

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: [serializableMiddleware],
});
