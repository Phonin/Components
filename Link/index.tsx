import { Component } from 'preact';
import { Link } from 'preact-router';
import stylesheet from './style.scss';
import gss from '../getStyle';
const style = gss(stylesheet);

const componentVersion = '1.0.0';

/**
 * @name MozLink
 * @description The link component
 * @author 0J3
 * @original https://github.com/0J3/mozAlike/blob/main/link/index.tsx
 *
 * @class
 */
export default class MozLink extends Component<{
  /**
   * @name href
   * @description the actual href
   * @type string
   */
  href: string;
  /**
   * @name hoverUrl
   * @description the url to show when hovering
   * @notice only works on certain browsers
   * @type string
   * @default href
   */
  hoverUrl?: string;
  /**
   * @name LinkComponent
   * @description The actual link component
   *
   * @discouraged
   * @deprecated Too hard to maintain 2 versions.
   */
  LinkComponent?: typeof Component;
  /**
   * @name className
   * @description See Class
   */
  className?: string;
  /**
   * @name class
   * @description actual class lul
   */
  class?: string;
  /**
   * @name target
   * @description basically something to open in new tab/window idk
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  activeClassName?: any;
}> {
  render() {
    const Classes = `${style('mozLink')}${
      this.props.className ? ' ' + this.props.className : ''
    }${this.props.class ? ' ' + this.props.class : ''}`;

    if (this.props.LinkComponent)
      return (
        <this.props.LinkComponent
          href={this.props.href}
          class={Classes}
          className={Classes}
          target={this.props.target}
          data-phoninComponent={'lgbt.nora.phonin.Link'}
          data-phoninComponentVersion={componentVersion}
          /**
           * @name data-mozAlikeComponent
           * @deprecated Use data-phoninComponent instead
           */
          data-mozAlikeComponent={'lgbt.nora.MozAlike.Link'}
          /**
           * @name data-mozAlikeComponentVersion
           * @deprecated Use data-phoninComponentVersion instead
           */
          data-mozAlikeComponentVersion={componentVersion}
          activeClassName={this.props.activeClassName}
        >
          {this.props.children}
        </this.props.LinkComponent>
      );
    else
      return (
        <Link
          href={this.props.href}
          class={Classes}
          target={this.props.target}
          onClick={
            this.props.target === 'blank'
              ? () => {
                  window.open(this.props.href);
                }
              : () => {}
          }
          data-link={this.props.href}
          data-mozAlikeComponent={'lgbt.nora.MozAlike.Link'}
          data-mozAlikeComponentVersion={componentVersion}
          activeClassName={this.props.activeClassName}
        >
          {this.props.children}
        </Link>
      );
  }
}
