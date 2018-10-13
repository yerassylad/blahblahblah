import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div id="right-panel" className="right-panel clearfix">
        <div className="col-md-12 col-sm-12 col-xs-12 menu-block mb-30 or-man">
          <div className="col-md-2 block-tab">
            <img
              src="assets/img/logo_shield.png"
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-md-2 block-tab">
            <div className="clock">
              <img
                src="assets/img/icon/icon7.svg"
                alt=""
                className="center-block"
              />
              <span>2</span>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 mb-none">
            <div className="menu-2">
              <ul>
                <li>
                  <a href="#">
                    <span className="m-cirle">12</span>
                    Очередь
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_1">
                    <div className="df">
                      <span className="number">1</span> <span className="img" />
                    </div>{" "}
                    Авто в боксе{" "}
                    <span className="ab_icon">
                      <img src="assets/img/icon/icon-eye.svg" alt="" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_1">
                    <div className="df">
                      <span className="number">2</span> <span className="img" />
                    </div>{" "}
                    Авто в боксе
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_1">
                    <div className="df">
                      <span className="number gray">3</span>
                      <span className="img" />
                    </div>{" "}
                    Свободен{" "}
                    <span className="ab_icon">
                      <img src="assets/img/icon/icon-plus.svg" alt="" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_2">
                    <div className="df">
                      <span className="number red">4</span>{" "}
                      <span className="img4" />
                    </div>{" "}
                    Нет сигнала
                  </a>
                </li>
                <li>
                  <a href="#" className="active menu_1">
                    <div className="df">
                      <span className="number">5</span> <span className="img" />
                    </div>{" "}
                    Авто в боксе
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block8 clearfix">
          <div className="title">Настройки</div>
          <div className="block8-main clearfix">
            <div className="block8-menu">
              <ul>
                <li>
                  <a href="#" className="active">
                    Основная информация
                  </a>
                </li>
                <li>
                  <a href="#">Режим работы</a>
                </li>
                <li>
                  <a href="#">Тариф G-Service</a>
                </li>
                <li>
                  <a href="#">Ограничение доступа</a>
                </li>
                <li>
                  <a href="#">Личные данные</a>
                </li>
              </ul>
            </div>
            <div className="block8-content">
              <form action="" className="block8-form">
                <div className="form-1">
                  <span>Полное название</span>
                  <div className="load">
                    <input type="text" value="ООО “Aqua-city”" />
                    <img src="assets/img/loader.gif" alt="" />
                  </div>
                </div>
                <div className="form-1">
                  <span>Адрес</span>
                  <div className="adres">
                    <input
                      type="text"
                      placeholder="г. Москва, ул. Верейская, д.2 "
                    />
                    <img src="assets/img/icon/icon-adres.svg" alt="" />
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
                        <input
                          type="file"
                          data-role="magic-overlay"
                          data-target="#pictureBtn"
                          data-edit="insertImage"
                        />
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
                  СОХРАНИТЬ <img src="assets/img/icon/save.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
