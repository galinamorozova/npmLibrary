import React from "react";
import { ButtonL } from "../ButtonL/ButtonL";
import "./style.css";

export const Buttons = (): JSX.Element => {
  return (
    <div  className="container"  >
        <p>hover="off" type="primary"</p>
        <div className="container">
            <ButtonL hover="off" iconType="none" type="primary"/>
            <ButtonL hover="off" iconType="r" type="primary" />
            <ButtonL hover="off" iconType="l" type="primary" />
        </div>
        <p>hover="off" type="secondary"</p>
        <div className="container">
            <ButtonL hover="off" iconType="none" type="secondary"/>
            <ButtonL hover="off" iconType="r" type="secondary"/>
            <ButtonL hover="off" iconType="l" type="secondary"/>
        </div>
        <p>hover="off" type="outline"</p>
        <div className="container">
            <ButtonL hover="off" iconType="none" type="outline" />
            <ButtonL hover="off" iconType="r" type="outline" />
            <ButtonL hover="off" iconType="l" type="outline" />
        </div>
        <p>hover="off" type="disabled"</p>
        <div className="container">
            <ButtonL hover="off" iconType="none" type="disabled" />
            <ButtonL hover="off" iconType="r" type="disabled" />
            <ButtonL hover="off" iconType="l" type="disabled" />
        </div>
        <p>hover="on" type="primary"</p>
        <div className="container">
            <ButtonL hover="on" iconType="none" type="primary" />
            <ButtonL hover="on" iconType="r" type="primary" />
            <ButtonL hover="on" iconType="l" type="primary" />
        </div>
        <p>hover="on" type="outline"</p>
        <div className="container">
            <ButtonL hover="on" iconType="none" type="outline" />
            <ButtonL hover="on" iconType="r" type="outline" />
            <ButtonL hover="on" iconType="l" type="outline" />
        </div>
        <p>hover="on" type="disabled"</p>
        <div className="container">
            <ButtonL hover="on" iconType="none" type="disabled" />
            <ButtonL hover="on" iconType="r" type="disabled" />
            <ButtonL hover="on" iconType="l" type="disabled" />
        </div>
    </div>
  );
};
