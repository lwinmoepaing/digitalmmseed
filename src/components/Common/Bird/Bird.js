const Bird = () => (
  <div className="BirdContainer">
    <div className="bird-container bird-container--one">
      <div className="bird bird--one" />
    </div>

    <div className="bird-container bird-container--two">
      <div className="bird bird--two" />
    </div>

    <div className="bird-container bird-container--three">
      <div className="bird bird--three" />
    </div>

    <div className="bird-container bird-container--four">
      <div className="bird bird--four" />
    </div>

    <style jsx>
      {`
				.BirdContainer {
					overflow: hidden;
					width: 100%;
					position: absolute;
					min-height: 400px;
					z-index: 0;
					top: 0;
					left: 0;
				}
			`}

    </style>
  </div>
)

export default Bird
