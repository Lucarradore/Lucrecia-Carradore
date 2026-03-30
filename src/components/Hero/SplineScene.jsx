export default function SplineScene({ className = "" }) {
  return (
    <section className={`spline-scene ${className}`.trim()} aria-hidden="true">
      <div className="wrapper cubewrapper">
        <div className="poswrap">
          <div className="floatwrap">
            <div className="spinwrap">
              <div className="tran1">
                <div className="tran2">
                  <div className="cube">
                    <div className="cube_face" />
                    <div className="cube_face" />
                    <div className="cube_face" />
                    <div className="cube_face" />
                    <div className="cube_face" />
                    <div className="cube_face" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
