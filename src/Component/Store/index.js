import React from 'react'
import { createStore, combineReducers } from 'redux'
import profile from 'Component/Reducer/index.js'

export const Store = createStore({
  state: profile
})
