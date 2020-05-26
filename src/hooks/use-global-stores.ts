import React from 'react'
import { storesContext } from '../store/context'

export const useGlobalStore = () => React.useContext(storesContext)
