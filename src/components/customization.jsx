import React, { Component } from "react";

class Customization extends Component {
  state = {};
  render() {
    return (
      <div className="customization">
        <div
          style={{
            padding: "10 0 10 0",
          }}
        >
          <b>Customizations</b> <small>(Optional)</small>
          <p style={{ fontSize: 10 }}>
            <em>
              Note: Few changes may reflect only in the generated image and not
              in the preview
            </em>
          </p>
        </div>

        <fieldset>
          <legend>Handwriting Options</legend>
          <div>
            <label className="block" htmlFor="handwriting-font">
              Handwriting Font
            </label>
            <select>
              <option
                id="handwriting-font"
                style={{ fontFamily: "Homemade Apple" }}
              >
                Homemade Apple
              </option>
              <option style={{ fontFamily: "Caveat" }}>Caveat</option>
              <option selected={true}>Arabic</option>
            </select>
          </div>
          <div className="upload-handwriting-container">
            <label className="block" htmlFor="font-file">
              Upload your handwriting font <small>(Beta)</small>&nbsp;
              <a
                style={{ fontSize: 1.1 }}
                title="How to add your own handwriting"
                href="#how-to-add-handwriting"
              >
                &#9432;
              </a>
            </label>
            <input accept=".ttf, .otf" type="file" id="font-file" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Page & Text Options</legend>

          <div className="category-grid">
            <div className="postfix-input" data-postfix="pt">
              <label htmlFor="font-size">Font Size</label>
              <input
                id="font-size"
                min="0"
                step="0.5"
                value="10"
                type="number"
              />
            </div>
            <div>
              <label className="block" htmlFor="ink-color">
                Ink Color
              </label>
              <select id="ink-color">
                <option default value="#000f55">
                  Blue
                </option>
                <option value="black">Black</option>
                <option value="#ba3807">Red</option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="page-size">
                Page Size
              </label>
              <select id="page-size">
                <option default value="a4">
                  A4 &nbsp;
                </option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="page-effects">
                Effects
              </label>
              <select id="page-effects">
                <option default value="shadows">
                  Shadows
                </option>
                <option value="scanner">Scanner</option>
                <option value="no-effect">No Effect</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Spacing Options</legend>

          <div className="category-grid">
            <div className="postfix-input" data-postfix="px">
              <label htmlFor="top-padding">Vertical Position</label>
              <input id="top-padding" min="0" value="5" type="number" />
            </div>
            <div className="postfix-input" data-postfix="px">
              <label htmlFor="word-spacing">Word Spacing</label>
              <input id="word-spacing" min="0" value="0" type="number" />
            </div>
            <div className="postfix-input" data-postfix="pt">
              <label htmlFor="letter-spacing">Letter Spacing</label>
              <input id="letter-spacing" value="0" type="number" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Margin & Line Options</legend>

          <div className="category-grid">
            <div>
              <label htmlFor="paper-margin-toggle">
                Paper Margin:
                <span aria-label="paper margin status" className="status">
                  on
                </span>
              </label>
              <label className="switch-toggle outer">
                <input
                  aria-checked="true"
                  checked
                  aria-label="Paper Margin Button"
                  id="paper-margin-toggle"
                  type="checkbox"
                />
                <div></div>
              </label>
            </div>

            <div>
              <label htmlFor="paper-line-toggle">
                Paper Lines:
                <span aria-label="paper line status" className="status">
                  on
                </span>
              </label>
              <label className="switch-toggle outer">
                <input
                  aria-checked="true"
                  checked
                  aria-label="Paper Line Button"
                  id="paper-line-toggle"
                  type="checkbox"
                />
                <div></div>
              </label>
            </div>
            <div className="experimental">
              <label htmlFor="paper-curve-toggle">
                Paper Curve:
                <span aria-label="paper curve status" className="status">
                  off
                </span>
              </label>
              <label
                title="Paper Curve (Yet to be implemented)"
                className="switch-toggle outer"
                style={{ cursor: "not-allowed" }}
              >
                <input
                  aria-checked="false"
                  aria-label="Paper Curve Button"
                  id="paper-curve-toggle"
                  type="checkbox"
                />
                <div></div>
              </label>
            </div>
          </div>
        </fieldset>

        <hr style={{ border: "0.3px", width: "80%" }} />
        <div style={{ textAlign: "center", padding: "30px" }}>
          <button
            type="submit"
            data-testid="generate-image-button"
            className="button generate-image-button"
          >
            Generate Image
          </button>
        </div>
      </div>
    );
  }
}

export default Customization;
