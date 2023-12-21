import React from 'react';
import s from './Screenshot.module.css';

interface ScreenshotProps {
  url_full: string | null;
}

export class Screenshot extends React.Component<ScreenshotProps> {
  public shouldComponentUpdate(nextProps: Readonly<ScreenshotProps>) {
    return (
      nextProps.url_full !== this.props.url_full
    );
  }

  public componentDidMount() {
    return this.render();
  }

  public componentDidUpdate() {
    return this.render();
  }

  public render() {
    return (
      <a href={this.props.url_full || ''} target="_blank">
        <img className={s.screenshot} src={`data:image/jpeg;base64,${this.props.children as string}`} />
      </a>
    );
  }
}
