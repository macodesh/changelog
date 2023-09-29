import { useState } from 'react';
import LogUpdate from './LogUpdate';

export default function RecentUpdates() {
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <div className="recent-updates">
      <div className="timeline">
        <div className="timeline-dot">
          <span className="timeline-circle"></span>
        </div>
        <span className="timeline-line"></span>
      </div>

      <div className="content">
        <h3 className="content-status">Em progresso</h3>
        <div className="content-tag">
          <span>v1.0</span>
        </div>
        <h2 className="content-title">Múltiplos casos de uso</h2>
        <p className="content-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          itaque eos blanditiis unde animi? Perferendis eos quibusdam sint.
          Ipsum sequi fuga dicta est aliquid vero eius ex! Consequatur, non.
          Debitis placeat id laboriosam quo iste vitae voluptas eveniet minus
          soluta?
        </p>
        <div className="content-preview">
          <img
            src="https://picsum.photos/300/200"
            alt=""
          />
        </div>

        {showUpdates ? (
          <div className="content-updates">
            <LogUpdate />
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
    </div>
  );
}
