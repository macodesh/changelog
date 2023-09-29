import { useState } from 'react';
import LogUpdate from './LogUpdate';

interface IRecentUpdatesProps {
  status: string;
  tag: string;
  title: string;
  text: string;
  preview: string;
  updates: {
    id: string;
    label: string;
    title: string;
    topics: {
      id: string;
      title: string;
      text: string;
    }[];
  }[];
}

export default function RecentUpdates({
  status,
  tag,
  title,
  text,
  preview,
  updates
}: IRecentUpdatesProps) {
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <>
      <div className="timeline">
        <div className="timeline-dot">
          <span className="timeline-circle"></span>
        </div>
        <span className="timeline-line"></span>
      </div>

      <div className="content">
        <h3 className="content-status">{status}</h3>
        <div className="content-tag">
          <span>{tag}</span>
        </div>
        <h2 className="content-title">{title}</h2>
        <p className="content-text">{text}</p>
        <div className="content-preview">
          <img
            src={preview}
            alt={title}
          />
        </div>

        {showUpdates ? (
          <div className="content-updates">
            {updates.map(({ id, label, title, topics }) => (
              <LogUpdate
                key={id}
                label={label}
                title={title}
                topics={topics}
              />
            ))}
          </div>
        ) : (
          ''
        )}

        <button
          className="content-updates-toggle"
          type="button"
          onClick={() => setShowUpdates(!showUpdates)}
        >
          <span>✖</span>
          {showUpdates ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      </div>
    </>
  );
}
