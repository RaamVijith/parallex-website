

function App() {
  return (
   <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Welcome to Parallax web</div>
                <div className="title">Dark Forest</div>
              </div>
              <div className="img-layer layer-base" style={{backgroundImage: `url(${})`}}></div>
              <div className="img-layer layer-mid" style={{backgroundImage: `url(${})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage: `url(${})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage: `url(${})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage: `url(${})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage: `url(${})`}}></div>




            </div>
          </header>
        </div>
      </div>
   </>
  );
}

export default App;
