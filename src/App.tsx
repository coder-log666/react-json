import React, {useContext} from "react";

import RenderContext from './context'

export default function App() {
    const jsonRender: any = useContext(RenderContext);
    let a = jsonRender({
        type: 'page',
        className: 'jsonPage',
        title: 'page标题',
        subTitle: 'page副标题',
        bodyClassName: 'page-body-className',
        headerClassName: 'page-header-className',
        body: {
            type: 'page'
        }
    })
    console.log(11111)
    return a
}