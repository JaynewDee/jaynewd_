const handleDrop = (e, setNavLocation) => {
    const x = e.clientX - 45
    setNavLocation({ top: '0rem', left: `${x}px` });
  };
  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move'
  };

  export { handleDrop, handleEnter, handleOver};