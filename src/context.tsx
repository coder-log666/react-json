import React from 'react'
import {render} from './reactJson/index'

const RenderContext = React.createContext({render: render});

export default RenderContext