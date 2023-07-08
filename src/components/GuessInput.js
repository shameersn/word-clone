import React from "react";

export default function GuessInput({onNewItemSubmit}) {

  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewItemSubmit(input);
    setInput('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input value={input} onChange={e => setInput(e.target.value?.toUpperCase())} id="guess-input" type="text"  />
    </form>
  );
}
