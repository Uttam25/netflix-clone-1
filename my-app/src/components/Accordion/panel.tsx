'use client'

import * as React from 'react';

export interface PanelProps {
  index: number;
  title: React.ReactNode;
  duration: number;
  children?: React.ReactNode;
  activeTab: number;
  activatePanel(index: number): void;
  open?: boolean;
  multiple: boolean;
}

export const Panel: React.FunctionComponent<Readonly<PanelProps>> = ({
  index,
  title,
  duration,
  activeTab,
  activatePanel,
  children,
  
}: PanelProps) => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  const isActive = activeTab === index;
  const style: React.CSSProperties = {
    height: `${isActive ? height : 0}px`,
    overflow: 'hidden',
    marginTop:'8px',
    marginBottom:'1rem',
    
    backgroundColor:'rgb(45,45,45)',
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const el = ref.current;
      const newHeight = el?.querySelector('.panel_body')?.scrollHeight;

      setHeight(newHeight || height);
    }, duration || 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive, duration, height]);

  return (
    <div className="panel"  aria-expanded={isActive} ref={ref}>
      <button
        role="tab"
        className="panel_head"
        onClick={() => {
          activatePanel(index);
        }}
      >
        {title}
      </button>

      <div style={style} className="panel_body" aria-hidden={!isActive}>
        <div className="panel_content">{children}</div>
      </div>
    </div>
  );
};
