const handleDrop = (e, setNavLocation) => {
    const y = e.clientY - 45;
    setNavLocation({ top: `${y}px`, right: `.36rem` });
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