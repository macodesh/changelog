export default function LogUpdate() {
  return (
    <>
      <div className="update">
        <div className="update-top">
          <div className="update-top-icon">
            <span>🚀</span>
          </div>
          <h4 className="update-top-title">Novas features</h4>
        </div>

        <ul className="update-list">
          <li className="update-item">
            <h5 className="update-item-title">Feature 1</h5>
            <p className="update-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quidem!
            </p>
          </li>
          <li className="update-item">
            <h5 className="update-item-title">Feature 2</h5>
            <p className="update-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quidem!
            </p>
          </li>
        </ul>
      </div>

      <div className="update">
        <div className="update-top">
          <div className="update-top-icon">
            <span>🛠</span>
          </div>
          <h4 className="update-top-title">Hot fixes de Setembro</h4>
        </div>

        <ul className="update-list">
          <li className="update-item">
            <h5 className="update-item-title">Correções de bugs</h5>
            <p className="update-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quidem!
            </p>
          </li>
          <li className="update-item">
            <h5 className="update-item-title">Melhorias de performance</h5>
            <p className="update-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quidem!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
