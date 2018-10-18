import React, { Component } from "react";

import loaderGIF from "../../assets/img/Loader.gif";
import addressSVG from "../../assets/img/icon/Icon-adres.svg";
import saveSVG from "../../assets/img/icon/save.svg";

import TextEditor from "./TextEditor";

class Settings extends Component {
  render() {
    return (
      <div>
        <div className="block8 clearfix">
          <div className="title">Настройки</div>
          <div className="block8-main clearfix">
            <div className="block8-content">
              <form action="" className="block8-form">
                <div className="form-1">
                  <span>Полное название</span>
                  <div className="load">
                    <input type="text" value="ООО “Aqua-city”" />
                    <img src={loaderGIF} alt="loader gif" />
                  </div>
                </div>
                <div className="form-1">
                  <span>Адрес</span>
                  <div className="adres">
                    <input type="text" placeholder="Введите адресс" />
                    <img src={addressSVG} alt="" />
                  </div>
                </div>
                <div className="form-1">
                  <span>Количество боксов</span>
                  <div className="form-1a">
                    <input type="text" value="4" />
                    <button className="button-bnone">
                      <span>+</span> Добавить бокс
                    </button>
                  </div>
                </div>
                <div className="form-1">
                  <span>Краткое описание</span>
                  <textarea />
                </div>
                <div className="form-1">
                  <span>Подробное описание </span>

                  <div>
                    <div
                      className="btn-toolbar"
                      data-role="editor-toolbar"
                      data-target="#editor"
                    >
                      <div className="btn-group">
                        <a
                          className="btn dropdown-toggle"
                          data-toggle="dropdown"
                          title="Font"
                        >
                          <i className="icon-font" />
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu" />
                      </div>
                      <div className="btn-group">
                        <a
                          className="btn dropdown-toggle"
                          data-toggle="dropdown"
                          title="Font Size"
                        >
                          <i className="icon-text-height" />
                          &nbsp;
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a data-edit="fontSize 5">
                              <font size="5">Huge</font>
                            </a>
                          </li>
                          <li>
                            <a data-edit="fontSize 3">
                              <font size="3">Normal</font>
                            </a>
                          </li>
                          <li>
                            <a data-edit="fontSize 1">
                              <font size="1">Small</font>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group">
                        <a
                          className="btn"
                          data-edit="bold"
                          title="Bold (Ctrl/Cmd+B)"
                        >
                          <i className="icon-bold" />
                        </a>
                        <a
                          className="btn"
                          data-edit="italic"
                          title="Italic (Ctrl/Cmd+I)"
                        >
                          <i className="icon-italic" />
                        </a>
                        <a
                          className="btn"
                          data-edit="strikethrough"
                          title="Strikethrough"
                        >
                          <i className="icon-strikethrough" />
                        </a>
                        <a
                          className="btn"
                          data-edit="underline"
                          title="Underline (Ctrl/Cmd+U)"
                        >
                          <i className="icon-underline" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          className="btn"
                          data-edit="insertunorderedlist"
                          title="Bullet list"
                        >
                          <i className="icon-list-ul" />
                        </a>
                        <a
                          className="btn"
                          data-edit="insertorderedlist"
                          title="Number list"
                        >
                          <i className="icon-list-ol" />
                        </a>
                        <a
                          className="btn"
                          data-edit="outdent"
                          title="Reduce indent (Shift+Tab)"
                        >
                          <i className="icon-indent-left" />
                        </a>
                        <a
                          className="btn"
                          data-edit="indent"
                          title="Indent (Tab)"
                        >
                          <i className="icon-indent-right" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          className="btn"
                          data-edit="justifyleft"
                          title="Align Left (Ctrl/Cmd+L)"
                        >
                          <i className="icon-align-left" />
                        </a>
                        <a
                          className="btn"
                          data-edit="justifycenter"
                          title="Center (Ctrl/Cmd+E)"
                        >
                          <i className="icon-align-center" />
                        </a>
                        <a
                          className="btn"
                          data-edit="justifyright"
                          title="Align Right (Ctrl/Cmd+R)"
                        >
                          <i className="icon-align-right" />
                        </a>
                        <a
                          className="btn"
                          data-edit="justifyfull"
                          title="Justify (Ctrl/Cmd+J)"
                        >
                          <i className="icon-align-justify" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          className="btn"
                          title="Insert picture (or just drag & drop)"
                          id="pictureBtn"
                        >
                          <i className="icon-picture" />
                        </a>
                        {/* <input
                          type="file"
                          data-role="magic-overlay"
                          data-target="#pictureBtn"
                          data-edit="insertImage"
                        /> */}
                      </div>
                      <div className="btn-group">
                        <a
                          className="btn"
                          data-edit="undo"
                          title="Undo (Ctrl/Cmd+Z)"
                        >
                          <i className="icon-undo" />
                        </a>
                        <a
                          className="btn"
                          data-edit="redo"
                          title="Redo (Ctrl/Cmd+Y)"
                        >
                          <i className="icon-repeat" />
                        </a>
                      </div>
                      <input
                        type="text"
                        data-edit="inserttext"
                        id="voiceBtn"
                        x-webkit-speech=""
                      />
                    </div>

                    <div id="editor" />
                  </div>
                </div>
              </form>
              <div className="order-fixed">
                <button className="cancel">Отмена</button>
                <button className="save">
                  СОХРАНИТЬ <img src={saveSVG} alt="save icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <TextEditor />
      </div>
    );
  }
}

export default Settings;
