import React from "react";

const Loader = (props) => {
    return (
<div className="modal fade" id="Loader" tabIndex="-1" aria-labelledby="LoaderLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <img src="/loader.gif" style={{width: "100%"}} alt="Loading" />
      </div>
    </div>
  </div>
</div>
    )
}

export default Loader;