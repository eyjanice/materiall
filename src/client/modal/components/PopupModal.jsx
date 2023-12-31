import React, { useState } from 'react';

export function PopupModal({ headerTypeText, body, onCloseClick }) {
  return (
    <div id="small-modal-container" className="small-modal-container">
      <div className="small-modal-header">
        <div className="small-modal-header-text">
          <div className="small-modal-header-type">{headerTypeText}</div>
          <div className="small-modal-header-headline">
            Auto-Generated Options
          </div>
        </div>
        <img className="small-modal-header-close" onClick={onCloseClick} />
      </div>
      <div className="small-modal-main">{body}</div>
    </div>
  );
}
