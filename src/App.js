import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="rotated__title eft">
        <p> Multi user</p>
      </div>
      <div className="wrapper">
        <section className="socket_informer">
          <div className="socket_informer__messages">
            <div className="socket_informer__message">
              <div className="message__label">user :</div>
              <div className="message__value">test1 / </div>
              <div className="message_status status_type_success">
                connected
              </div>
            </div>
            <div className="socket_informer__message">
              <div className="message__label">user :</div>
              <div className="message__value">test1 / </div>
              <div className="message_status status_type_success">
                connected
              </div>
            </div>
            <div className="socket_informer__message">
              <div className="message__label">user :</div>
              <div className="message__value">test1 / </div>
              <div className="message_status status_type_fail">
                disconnected
              </div>
            </div>
            <div className="socket_informer__message">
              <div className="message__label">user :</div>
              <div className="message__value">test1 / </div>
              <div className="message_status status_type_fail">
                disconnected
              </div>
            </div>
            <div className="socket_informer__message">
              <div className="message__label">user :</div>
              <div className="message__value">test1 / </div>
              <div className="message_status status_type_fail">
                disconnected
              </div>
            </div>
          </div>
        </section>
        <section className="dialog">
          <div className="dialog__list">
            {Array.from({ length: 50 }, (v, k) => k).map(i => {
              if (i % 2 === 0) {
                return <div className="message__text me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate nostrum illum quisquam cum ipsam assumenda, facilis, unde eum quibusdam tempore veniam quae atque distinctio minima beatae architecto tenetur porro? {i}</div>
              }
              return <div className="message__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate nostrum illum quisquam cum ipsam assumenda, facilis {i}</div>
            })}
          </div>
          <div className="control">
              <input className="control__input" placeholder="напишите сообщение" />
          </div>
        </section>
      </div>
      <div className="rotated__title right">
        <p>Chat room</p>
      </div>
    </div>
  );
}

export default App;
