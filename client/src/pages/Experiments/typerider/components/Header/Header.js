import React from "react";

const Header = ({ sentence }) => {
  return (
    <header className="sentence-box">
      <h1 className="sentence-header">{sentence.scrambled}</h1>
    </header>
  );
};

const HeaderMemo = React.memo(Header);
export { HeaderMemo };
