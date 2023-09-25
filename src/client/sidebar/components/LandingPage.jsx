import React from 'react';
import Support from './Support';

export function LandingPage({ slideUrl, onChange, onSubmit }) {
  return (
    <div className="landing">
      <h1>Hello!</h1>
      <div className="landing-instructions">
        Enter the source URL of your Google Slides™ below.
      </div>
      <form className="form-group" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>source URL</label>
          <input
            type="text"
            name="slideID"
            id="slideId"
            value={slideUrl}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-green" id="fetch-slide" onClick={onSubmit}>
          enter
        </button>
      </form>
      <Support />
    </div>
  );
}
