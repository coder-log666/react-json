import { Renderer } from "../../core/factory";
import React from "react";
import { PageProps } from "./interface";

@Renderer({
    test: /(?:^|\/)page$/,
    name: "page"
  })
  export class PageRenderer extends React.Component<PageProps> {
    render(): React.ReactNode {
      const {className, title, subTitle, headerClassName, body, bodyClassName} = this.props
        return (<div className={"page" + ` ${className}`}>
            <div className={"page-header" + ` ${headerClassName}`}>
              <div className="title">
                { title }
              </div>
              <div className="subtitle">
                { subTitle }
              </div>
            </div>
            <div className={"page-body" + ` ${bodyClassName}`}>
              {'page-body'}
            </div>
        </div>)
    }
  }