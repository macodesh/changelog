export default function LogContent() {
  return (
    <div className="log-content">
      <div className="timeline">
        <div className="timeline-dot">
          <span className="timeline-circle"></span>
        </div>
        <span className="timeline-line"></span>
      </div>

      <div className="content">
        <h3 className="content-status">Em progresso</h3>
        <h2 className="content-title">Múltiplos casos de uso</h2>
        <p className="content-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          itaque eos blanditiis unde animi? Perferendis eos quibusdam sint.
          Ipsum sequi fuga dicta est aliquid vero eius ex! Consequatur, non.
          Debitis placeat id laboriosam quo iste vitae voluptas eveniet minus
          soluta?
        </p>
        <img
          src=""
          alt=""
          className="content-preview"
        />

        <div className="content-updates">
          <div className="update">
            <img
              src=""
              alt=""
              className="update-icon"
            />
            <h4 className="update-title">Novas features</h4>
            <ul className="update-list">
              <li className="update-item">
                <h5 className="update-item-title">Feature 1</h5>
                <p className="update-item-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, quidem!
                </p>
              </li>
              <li className="update-item">
                <h5 className="update-item-title">Feature 2</h5>
                <p className="update-item-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, quidem!
                </p>
              </li>
            </ul>
          </div>

          <div className="update">
            <img
              src=""
              alt=""
              className="update-icon"
            />
            <h4 className="update-title">Correção de bugs</h4>
            <ul className="update-list">
              <li className="update-item">
                <h5 className="update-item-title">Bug fixes</h5>
                <p className="update-item-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, quidem!
                </p>
              </li>
              <li className="update-item">
                <h5 className="update-item-title">Melhorias de performance</h5>
                <p className="update-item-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, quidem!
                </p>
              </li>
            </ul>
          </div>

          <button
            className="content-updates-toggle"
            type="button"
          >
            Mostrar mais
          </button>
        </div>
      </div>
    </div>
  );
}
